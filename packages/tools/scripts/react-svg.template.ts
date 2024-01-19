type ReactIconTemplateProps = {
  componentName: string;
  svgProps: string;
  pathProps: string[];
};
export default function createReactSvgTemplate({
  componentName,
  pathProps,
  svgProps,
}: ReactIconTemplateProps) {
  return `
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ${componentName} = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg ${svgProps} {...otherProps} >
          ${pathProps.map((path) => `<path ${path} />`).join("\n")}
        </svg>
      )
    }
    
    
    export default ${componentName};
      `;
}
