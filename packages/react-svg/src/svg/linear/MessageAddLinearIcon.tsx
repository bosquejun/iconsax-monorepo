
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MessageAddLinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M22 7.42993V13.4299C22 14.9299 21.5 16.1799 20.62 17.0599C19.75 17.9299 18.5 18.4299 17 18.4299V20.5599C17 21.3599 16.11 21.84 15.45 21.4L11 18.4299H8.88C8.96 18.1299 9 17.8199 9 17.4999C9 16.4799 8.61 15.54 7.97 14.83C7.25 14.01 6.18 13.4999 5 13.4999C3.88 13.4999 2.86 13.96 2.13 14.71C2.04 14.31 2 13.8799 2 13.4299V7.42993C2 4.42993 4 2.42993 7 2.42993H17C20 2.42993 22 4.42993 22 7.42993Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M9 17.5C9 17.82 8.96 18.13 8.88 18.43C8.79 18.83 8.63001 19.22 8.42001 19.56C7.73001 20.72 6.46 21.5 5 21.5C3.97 21.5 3.04 21.11 2.34 20.47C2.04 20.21 1.77999 19.9 1.57999 19.56C1.20999 18.96 1 18.25 1 17.5C1 16.42 1.43 15.43 2.13 14.71C2.86 13.96 3.88 13.5 5 13.5C6.18 13.5 7.25 14.01 7.97 14.83C8.61 15.54 9 16.48 9 17.5Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M6.48999 17.48H3.51001" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M5 16.02V19.01" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M8.5 10.5H15.5" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default MessageAddLinearIcon;
      