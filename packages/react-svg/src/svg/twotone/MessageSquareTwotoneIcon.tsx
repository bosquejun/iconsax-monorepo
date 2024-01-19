
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MessageSquareTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M18.28 9.75982V12.8998C18.28 13.0998 18.27 13.2998 18.25 13.4898C18.07 15.6098 16.82 16.6698 14.52 16.6698H14.21C14.01 16.6698 13.82 16.7598 13.71 16.9198L12.77 18.1798C12.35 18.7398 11.68 18.7398 11.26 18.1798L10.32 16.9198C10.22 16.7898 9.99001 16.6698 9.82001 16.6698H9.51001C7.00001 16.6698 5.75 16.0498 5.75 12.9098V9.7698C5.75 7.4698 6.80999 6.21982 8.92999 6.03982C9.11999 6.01982 9.31999 6.00982 9.51999 6.00982H14.55C17.02 5.99982 18.28 7.25982 18.28 9.75982Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default MessageSquareTwotoneIcon;
      