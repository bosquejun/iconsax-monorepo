
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const NotificationCircleBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z" fill={color} />
<path opacity="0.4" d="M19 9.5C16.52 9.5 14.5 7.48 14.5 5C14.5 4.09 14.77 3.25 15.24 2.55C14.22 2.2 13.13 2 12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 10.87 21.8 9.78 21.45 8.76C20.75 9.23 19.91 9.5 19 9.5Z" fill={color} />
        </svg>
      )
    }
    
    
    export default NotificationCircleBulkIcon;
      