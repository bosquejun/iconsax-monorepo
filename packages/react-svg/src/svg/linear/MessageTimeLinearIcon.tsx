
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MessageTimeLinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M22 7.42993V13.4299C22 14.9299 21.5 16.1799 20.62 17.0599C19.75 17.9299 18.5 18.4299 17 18.4299V20.5599C17 21.3599 16.11 21.84 15.45 21.4L11 18.4299H8.88C8.96 18.1299 9 17.8199 9 17.4999C9 16.4799 8.61 15.54 7.97 14.83C7.25 14.01 6.18 13.4999 5 13.4999C3.88 13.4999 2.86 13.96 2.13 14.71C2.04 14.31 2 13.8799 2 13.4299V7.42993C2 4.42993 4 2.42993 7 2.42993H17C20 2.42993 22 4.42993 22 7.42993Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M9 17.5C9 18.7 8.47001 19.77 7.64001 20.5C6.93001 21.12 6.01 21.5 5 21.5C2.79 21.5 1 19.71 1 17.5C1 16.24 1.58 15.11 2.5 14.38C3.19 13.83 4.06 13.5 5 13.5C7.21 13.5 9 15.29 9 17.5Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M5.25 16.25V17.75L4 18.5" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M8.5 10.5H15.5" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default MessageTimeLinearIcon;
      