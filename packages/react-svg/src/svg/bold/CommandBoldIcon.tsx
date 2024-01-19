
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const CommandBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M16 8H8V16H16V8Z" fill={color} />
<path d="M2 19C2 20.65 3.35 22 5 22C6.65 22 8 20.65 8 19V16H5C3.35 16 2 17.35 2 19Z" fill={color} />
<path d="M5 2C3.35 2 2 3.35 2 5C2 6.65 3.35 8 5 8H8V5C8 3.35 6.65 2 5 2Z" fill={color} />
<path d="M22 5C22 3.35 20.65 2 19 2C17.35 2 16 3.35 16 5V8H19C20.65 8 22 6.65 22 5Z" fill={color} />
<path d="M19 16H16V19C16 20.65 17.35 22 19 22C20.65 22 22 20.65 22 19C22 17.35 20.65 16 19 16Z" fill={color} />
        </svg>
      )
    }
    
    
    export default CommandBoldIcon;
      