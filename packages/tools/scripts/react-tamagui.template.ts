type ReactIconTemplateProps = {
  componentName: string;
  svgProps: string;
  pathProps: string[];
};
export default function createReactTamaguiTemplate({
  componentName,
  pathProps,
  svgProps,
}: ReactIconTemplateProps) {
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
