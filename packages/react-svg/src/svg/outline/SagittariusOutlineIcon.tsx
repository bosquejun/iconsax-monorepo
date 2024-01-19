
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const SagittariusOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M21 12.75C20.59 12.75 20.25 12.41 20.25 12V3.75H12C11.59 3.75 11.25 3.41 11.25 3C11.25 2.59 11.59 2.25 12 2.25H21C21.41 2.25 21.75 2.59 21.75 3V12C21.75 12.41 21.41 12.75 21 12.75Z" fill={color} />
<path d="M2.99948 21.75C2.80948 21.75 2.61945 21.68 2.46945 21.53C2.17945 21.24 2.17945 20.7599 2.46945 20.4699L20.4695 2.46994C20.7595 2.17994 21.2395 2.17994 21.5295 2.46994C21.8195 2.75994 21.8195 3.24 21.5295 3.53L3.52951 21.53C3.37951 21.68 3.18948 21.75 2.99948 21.75Z" fill={color} />
<path d="M17.4001 18.1501C17.2101 18.1501 17.02 18.08 16.87 17.93L6.07004 7.13004C5.78004 6.84004 5.78004 6.36004 6.07004 6.07004C6.36004 5.78004 6.84004 5.78004 7.13004 6.07004L17.93 16.87C18.22 17.16 18.22 17.64 17.93 17.93C17.78 18.08 17.5901 18.1501 17.4001 18.1501Z" fill={color} />
        </svg>
      )
    }
    
    
    export default SagittariusOutlineIcon;
      