
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const SecurityUserBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M18.8699 18C19.8199 17.29 20.5999 15.74 20.5999 14.56V7.12996C20.5999 5.89996 19.6599 4.53994 18.5099 4.10994L13.5199 2.23995C12.6899 1.92995 11.3299 1.92995 10.4999 2.23995L5.50992 4.10994C4.35992 4.53994 3.41992 5.89996 3.41992 7.12996V14.56C3.41992 15.74 4.1999 17.29 5.1499 18L9.44992 21.2099C10.8599 22.2699 13.1799 22.2699 14.5899 21.2099L15.3299 20.65" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M11.9997 10.92C11.9597 10.92 11.9097 10.92 11.8697 10.92C10.9297 10.89 10.1797 10.11 10.1797 9.16003C10.1797 8.19003 10.9697 7.40002 11.9397 7.40002C12.9097 7.40002 13.6997 8.19003 13.6997 9.16003C13.6897 10.12 12.9397 10.89 11.9997 10.92Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M10.0091 13.7201C9.04906 14.3601 9.04906 15.4101 10.0091 16.0501C11.0991 16.7801 12.8891 16.7801 13.9791 16.0501C14.9391 15.4101 14.9391 14.3601 13.9791 13.7201C12.8991 12.9901 11.1091 12.9901 10.0091 13.7201Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default SecurityUserBrokenIcon;
      