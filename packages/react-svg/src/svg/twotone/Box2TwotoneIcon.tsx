
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Box2TwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M14.2194 9.78L11.9994 10.89M11.9994 10.89L9.77937 9.78M11.9994 10.89V13.67M14.2194 3.11L11.9994 2L9.77937 3.11M5.32938 18.67L3.10938 17.56V14.78M18.6694 18.67L20.8894 17.56V14.78" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default Box2TwotoneIcon;
      