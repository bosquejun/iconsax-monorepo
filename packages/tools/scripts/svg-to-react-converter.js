"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
// @ts-ignore
const recursive_readdir_1 = __importDefault(require("recursive-readdir"));
const fs_1 = __importDefault(require("fs"));
const xml2js = __importStar(require("xml2js"));
const react_native_svg_template_1 = __importDefault(require("./react-native-svg.template"));
const react_svg_template_1 = __importDefault(require("./react-svg.template"));
const react_tamagui_template_1 = __importDefault(require("./react-tamagui.template"));
const workspaceRoot = path_1.default.resolve(__dirname, "../../../");
const reactPackageDir = path_1.default.resolve(workspaceRoot, "packages/react-svg");
// ...
const parser = new xml2js.Parser();
const numberToWords = require("number-to-words");
const OUTPUT_TYPE = ["react-svg", "react-native-svg", "react-tamagui"];
const getOutputSettings = (type) => {
    if (!type)
        return OUTPUT_TYPE.map((type) => getOutputSettings(type)[0]);
    const outputBaseDir = path_1.default.resolve(workspaceRoot, `packages/${type}`);
    return [
        {
            type,
            outputBaseDir,
            outputSvgDir: path_1.default.resolve(outputBaseDir, "src"),
            template: (() => {
                switch (type) {
                    case "react-svg":
                        return react_svg_template_1.default;
                    case "react-native-svg":
                        return react_native_svg_template_1.default;
                    case "react-tamagui":
                        return react_tamagui_template_1.default;
                    default:
                        throw new Error("Invalid type");
                }
            })(),
        },
    ];
};
const prepareSvgCompProps = (svgProps, contentProps) => {
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
const convertObjToStringProps = (obj) => {
    return Object.entries(obj)
        .map(([key, value]) => `${key}="${value}"`)
        .join(" ")
        .replace(/(\w+)="{{(\w+)}}"/g, "$1={$2}");
};
const startConversion = (svgSourceFolder, outputSettings) => {
    const { template, outputSvgDir: outputDir, type } = outputSettings;
    const reactIndexDir = path_1.default.resolve(outputDir, "index.tsx");
    (0, recursive_readdir_1.default)(svgSourceFolder, (err, files) => __awaiter(void 0, void 0, void 0, function* () {
        if (err) {
            console.error("Error reading directory.", err);
            process.exit(1);
        }
        if (fs_1.default.existsSync(outputDir))
            fs_1.default.rmdirSync(outputDir, { recursive: true });
        const componentImports = [];
        for (const file of files) {
            if (path_1.default.extname(file) !== ".svg")
                continue;
            const parsedFile = path_1.default.parse(file);
            const iconType = parsedFile.dir.split("/").pop() || "basic";
            const componentFolder = path_1.default.join(outputDir, iconType);
            let componentName = parsedFile.name;
            if (!isNaN(parseInt(parsedFile.name[0]))) {
                const replacedFileName = parsedFile.name.replace(/^\d+/, (match) => numberToWords.toWords(parseInt(match)));
                componentName = replacedFileName;
            }
            componentName = componentName
                .split("-")
                .concat([iconType, "icon"])
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join("")
                .replace(/[^a-zA-Z0-9]/g, "");
            console.log(`[${type}]Generating react icon component: ${componentName}`);
            const svgRaw = fs_1.default.readFileSync(file, "utf8");
            const svgData = yield parser.parseStringPromise(svgRaw);
            const svgPath = svgData.svg.path;
            const pathProps = svgPath.map((path) => {
                const props = prepareSvgCompProps(path.$, {
                    fill: "color",
                    stroke: "color",
                });
                return props;
            });
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
            if (!fs_1.default.existsSync(componentFolder))
                fs_1.default.mkdirSync(componentFolder, { recursive: true });
            const fileName = path_1.default.join(componentFolder, `${componentName}.tsx`);
            yield fs_1.default.writeFileSync(fileName, componentData, {
                flag: "w+",
            });
            componentImports.push(`export {default as ${componentName}} from './${iconType}/${componentName}.js';`);
        }
        yield fs_1.default.writeFileSync(reactIndexDir, `
    ${componentImports.join("\n")}
  `, {
            flag: "w+",
        });
    }));
};
(() => __awaiter(void 0, void 0, void 0, function* () {
    const [svgSourceFolder, type] = process.argv.slice(2);
    const outputs = getOutputSettings(type);
    for (const output of outputs) {
        yield startConversion(svgSourceFolder, output);
    }
}))();
