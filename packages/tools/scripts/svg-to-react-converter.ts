import path from "path";
// @ts-ignore
import recursive from "recursive-readdir";

import fs from "fs";

import * as xml2js from "xml2js";
import createReactNativeSvgTemplate from "./react-native-svg.template";
import createReactSvgTemplate from "./react-svg.template";
import createReactTamaguiTemplate from "./react-tamagui.template";

const workspaceRoot = path.resolve(__dirname, "../../../");

const reactPackageDir = path.resolve(workspaceRoot, "packages/react-svg");

// ...

const parser = new xml2js.Parser();

const numberToWords = require("number-to-words");

const OUTPUT_TYPE = ["react-svg", "react-native-svg", "react-tamagui"] as const;

type OutputType = (typeof OUTPUT_TYPE)[number];

type OutputSettings = {
  outputBaseDir: string;
  outputSvgDir: string;
  type: OutputType;
  template: (props: any) => string | never;
};

const getOutputSettings = (type?: OutputType): OutputSettings[] => {
  if (!type)
    return OUTPUT_TYPE.map((type) => getOutputSettings(type)[0] as any);

  const outputBaseDir = path.resolve(workspaceRoot, `packages/${type}`);

  return [
    {
      type,
      outputBaseDir,
      outputSvgDir: path.resolve(outputBaseDir, "src"),
      template: (() => {
        switch (type) {
          case "react-svg":
            return createReactSvgTemplate;
          case "react-native-svg":
            return createReactNativeSvgTemplate;
          case "react-tamagui":
            return createReactTamaguiTemplate;
          default:
            throw new Error("Invalid type");
        }
      })(),
    },
  ];
};

const prepareSvgCompProps = (
  svgProps: any,
  contentProps: Record<string, string>
) => {
  for (const key in contentProps) {
    if (svgProps[key]) {
      svgProps[key] = `{{${contentProps[key]}}}`;
    }
  }

  if (svgProps["xmlns"]) {
    delete svgProps["xmlns"];
  }

  return convertObjToStringProps(svgProps);
};

const convertObjToStringProps = (obj: any) => {
  return Object.entries(obj)
    .map(([key, value]) => `${key}="${value}"`)
    .join(" ")
    .replace(/(\w+)="{{(\w+)}}"/g, "$1={$2}");
};

const startConversion = (
  svgSourceFolder: string,
  outputSettings: OutputSettings
) => {
  const { template, outputSvgDir: outputDir, type } = outputSettings;

  const reactIndexDir = path.resolve(outputDir, "index.tsx");

  recursive(svgSourceFolder, async (err: any, files: any[]) => {
    if (err) {
      console.error("Error reading directory.", err);
      process.exit(1);
    }

    if (fs.existsSync(outputDir)) fs.rmdirSync(outputDir, { recursive: true });

    const componentImports: string[] = [];

    for (const file of files) {
      if (path.extname(file) !== ".svg") continue;
      const parsedFile = path.parse(file);

      const iconType = parsedFile.dir.split("/").pop() || "basic";

      const componentFolder = path.join(outputDir, iconType);

      let componentName = parsedFile.name;

      if (!isNaN(parseInt(parsedFile.name[0]))) {
        const replacedFileName = parsedFile.name.replace(/^\d+/, (match) =>
          numberToWords.toWords(parseInt(match))
        );

        componentName = replacedFileName;
      }

      componentName = componentName
        .split("-")
        .concat([iconType, "icon"])
        .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("")
        .replace(/[^a-zA-Z0-9]/g, "");

      console.log(`[${type}]Generating react icon component: ${componentName}`);

      const svgRaw = fs.readFileSync(file, "utf8");

      const svgData = await parser.parseStringPromise(svgRaw);
      const svgPath = svgData.svg.path;
      const pathProps = svgPath.map((path: any) => {
        const props = prepareSvgCompProps(path.$, {
          fill: "color",
          stroke: "color",
        });
        return props;
      }) as string[];

      const svgProps = prepareSvgCompProps(svgData.svg.$, {
        fill: "color",
        stroke: "color",
        height: "size",
        width: "size",
      });

      const componentData = template({
        componentName,
        pathProps,
        svgProps,
      });

      if (!fs.existsSync(componentFolder))
        fs.mkdirSync(componentFolder, { recursive: true });

      const fileName = path.join(componentFolder, `${componentName}.tsx`);

      await fs.writeFileSync(fileName, componentData, {
        flag: "w+",
      });
      componentImports.push(
        `export {default as ${componentName}} from './${iconType}/${componentName}.js';`
      );
    }

    await fs.writeFileSync(
      reactIndexDir,
      `
    ${componentImports.join("\n")}
  `,
      {
        flag: "w+",
      }
    );
  });
};

(async () => {
  const [svgSourceFolder, type] = process.argv.slice(2);

  const outputs = getOutputSettings(type as OutputType);

  for (const output of outputs) {
    await startConversion(svgSourceFolder, output);
  }
})();
