"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createReactNativeSvgTemplate({ componentName, pathProps, svgProps, }) {
    return `
    import {
      Svg,
      Path,
      SvgProps,
    } from 'react-native-svg'

    type IconPropTypes = SvgProps & {
      size?: number,
      color?: string,
    }
    
    const ${componentName} = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <Svg ${svgProps} {...otherProps} >
        ${pathProps.map((path) => `<Path ${path} />`).join("\n")}
        </Svg>
      )
    }
    
    
    export default ${componentName};
      `;
}
exports.default = createReactNativeSvgTemplate;
