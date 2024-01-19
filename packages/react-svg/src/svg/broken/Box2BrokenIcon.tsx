
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Box2BrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M18.6694 18.67L20.8894 17.56V14.78M14.2194 9.78L11.9994 10.89L14.2194 9.78ZM11.9994 10.89L9.77937 9.78L11.9994 10.89ZM11.9994 10.89V13.67V10.89ZM20.8894 6.44L18.6694 7.55L20.8894 6.44ZM20.8894 6.44L18.6694 5.33L20.8894 6.44ZM20.8894 6.44V9.22V6.44ZM14.2194 3.11L11.9994 2L9.77937 3.11H14.2194ZM3.10938 6.44L5.32938 5.33L3.10938 6.44ZM3.10938 6.44L5.32938 7.55L3.10938 6.44ZM3.10938 6.44V9.22V6.44ZM11.9994 22L9.77937 20.89L11.9994 22ZM11.9994 22L14.2194 20.89L11.9994 22ZM11.9994 22V19.22V22ZM5.32938 18.67L3.10938 17.56V14.78L5.32938 18.67Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default Box2BrokenIcon;
      