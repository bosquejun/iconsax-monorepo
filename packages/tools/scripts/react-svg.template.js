"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createReactSvgTemplate({ componentName, pathProps, svgProps, }) {
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
exports.default = createReactSvgTemplate;
