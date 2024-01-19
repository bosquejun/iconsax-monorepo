
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Hierarchy3BulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M5 8C6.65685 8 8 6.65685 8 5C8 3.34315 6.65685 2 5 2C3.34315 2 2 3.34315 2 5C2 6.65685 3.34315 8 5 8Z" fill={color} />
<path d="M19 15C20.6569 15 22 13.6569 22 12C22 10.3431 20.6569 9 19 9C17.3431 9 16 10.3431 16 12C16 13.6569 17.3431 15 19 15Z" fill={color} />
<path d="M5 22C6.65685 22 8 20.6569 8 19C8 17.3431 6.65685 16 5 16C3.34315 16 2 17.3431 2 19C2 20.6569 3.34315 22 5 22Z" fill={color} />
<path opacity="0.4" d="M5 16.75C4.59 16.75 4.25 16.41 4.25 16V8C4.25 7.59 4.59 7.25 5 7.25C5.41 7.25 5.75 7.59 5.75 8C5.75 10.19 6.81 11.25 9 11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75H9C7.64 12.75 6.55 12.4 5.75 11.74V16C5.75 16.41 5.41 16.75 5 16.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Hierarchy3BulkIcon;
      