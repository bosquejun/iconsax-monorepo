
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const LogoutBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M9 7.2V16.79C9 20 11 22 14.2 22H16.79C19.99 22 21.99 20 21.99 16.8V7.2C22 4 20 2 16.8 2H14.2C11 2 9 4 9 7.2Z" fill={color} />
<path d="M5.56945 8.12002L2.21945 11.47C1.92945 11.76 1.92945 12.24 2.21945 12.53L5.56945 15.88C5.85945 16.17 6.33945 16.17 6.62945 15.88C6.91945 15.59 6.91945 15.11 6.62945 14.82L4.55945 12.75H15.2495C15.6595 12.75 15.9995 12.41 15.9995 12C15.9995 11.59 15.6595 11.25 15.2495 11.25H4.55945L6.62945 9.18002C6.77945 9.03002 6.84945 8.84002 6.84945 8.65002C6.84945 8.46002 6.77945 8.26002 6.62945 8.12002C6.33945 7.82002 5.86945 7.82002 5.56945 8.12002Z" fill={color} />
        </svg>
      )
    }
    
    
    export default LogoutBulkIcon;
      