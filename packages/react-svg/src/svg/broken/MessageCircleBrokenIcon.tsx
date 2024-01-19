
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MessageCircleBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M17.25 10.18V12.81C17.25 12.98 17.24 13.14 17.22 13.3C17.07 15.07 16.02 15.95 14.1 15.95H13.84C13.68 15.95 13.52 16.03 13.42 16.16L12.63 17.21C12.28 17.68 11.72 17.68 11.37 17.21L10.58 16.16C10.49 16.05 10.3 15.95 10.16 15.95H9.89999C7.79999 15.95 6.75 15.43 6.75 12.8V10.17C6.75 8.25004 7.63999 7.20002 9.39999 7.05002C9.55999 7.03002 9.72001 7.02002 9.89001 7.02002H14.09C16.2 7.04002 17.25 8.09002 17.25 10.18Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.30001 7.97 2.85001" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default MessageCircleBrokenIcon;
      