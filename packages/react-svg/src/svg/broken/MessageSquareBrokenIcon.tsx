
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MessageSquareBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M2 13.02V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M18.28 9.76007V12.9001C18.28 13.1001 18.27 13.3 18.25 13.49C18.07 15.61 16.82 16.6701 14.52 16.6701H14.21C14.01 16.6701 13.82 16.7601 13.71 16.9201L12.77 18.1801C12.35 18.7401 11.68 18.7401 11.26 18.1801L10.32 16.9201C10.22 16.7901 9.99001 16.6701 9.82001 16.6701H9.51001C7.00001 16.6701 5.75 16.0501 5.75 12.9101V9.77005C5.75 7.47005 6.80999 6.22007 8.92999 6.04007C9.11999 6.02007 9.31999 6.01007 9.51999 6.01007H14.55C17.02 6.00007 18.28 7.26007 18.28 9.76007Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default MessageSquareBrokenIcon;
      