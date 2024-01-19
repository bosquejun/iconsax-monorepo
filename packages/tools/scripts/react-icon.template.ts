

type ReactIconTemplateProps = {
    componentName:string,
    svgProps:string;
    Paths:string[];
}
export default function createReactIconTemplate({componentName,Paths,svgProps}:ReactIconTemplateProps) {
    return `
    import React from 'react'
    import {
      Svg,
      Path,
      SvgProps,
    } from 'react-native-svg'

    type IconPropTypes = SvgProps & {
      size?: number,
    }
    
    const ${componentName} = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <Svg ${svgProps} {...otherProps} >
          ${Paths.join("\n")}
        </Svg>
      )
    }
    
    
    export default ${componentName};
      `
}