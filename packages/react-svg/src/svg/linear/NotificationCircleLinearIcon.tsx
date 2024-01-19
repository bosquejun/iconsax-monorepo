
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const NotificationCircleLinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M14.02 2.2C13.36 2.07 12.69 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 11.32 21.93 10.65 21.8 10.01" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default NotificationCircleLinearIcon;
      