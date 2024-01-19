
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const CommandBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M16 8H8V16H16V8Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2.16992 19.99C2.57992 21.16 3.69994 22 4.99994 22C6.64994 22 7.99994 20.65 7.99994 19V16H4.99994" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M5 8H8V5C8 3.35 6.65 2 5 2C3.35 2 2 3.35 2 5C2 6.65 3.35 8 5 8Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M16 8H19C20.65 8 22 6.65 22 5C22 3.35 20.65 2 19 2C17.35 2 16 3.35 16 5V8Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M19 22C20.65 22 22 20.65 22 19C22 17.35 20.65 16 19 16H16V19C16 20.65 17.35 22 19 22Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default CommandBrokenIcon;
      