"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createReactTamaguiTemplate({ componentName, pathProps, svgProps, }) {
    return `
      import React, { memo } from 'react'
      import type { IconProps } from '@tamagui/helpers-icon'
      import {
        Svg,
        Path,
      } from 'react-native-svg';
      import { themed } from '@tamagui/helpers-icon'
  
      
      const ${componentName} = (props:IconProps) => {
        const { color = 'black', size = 24, ...otherProps } = props
        return (
          <Svg ${svgProps} {...otherProps} >
          ${pathProps.map((path) => `<Path ${path} />`).join("\n")}
          </Svg>
        )
      }
      
      export default memo<IconProps>(themed(${componentName}))
        `;
}
exports.default = createReactTamaguiTemplate;
