
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MessagesBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M21.9989 12.8595C21.9989 15.1495 20.8189 17.1795 18.9989 18.4595L17.6589 21.4095C17.3489 22.0795 16.4489 22.2095 15.9789 21.6395L14.4989 19.8595C12.6389 19.8595 10.9289 19.2295 9.62891 18.1795L10.2289 17.4695C14.8489 17.1195 18.4989 13.4595 18.4989 8.99953C18.4989 8.23953 18.3889 7.48953 18.1889 6.76953C20.4589 7.96953 21.9989 10.2495 21.9989 12.8595Z" fill={color} />
<path d="M16.3 6.07C15.13 3.67 12.52 2 9.5 2C5.36 2 2 5.13 2 9C2 11.29 3.18 13.32 5 14.6L6.34 17.55C6.65 18.22 7.55 18.34 8.02 17.78L8.57 17.12L9.5 16C13.64 16 17 12.87 17 9C17 7.95 16.75 6.96 16.3 6.07ZM12 9.75H7C6.59 9.75 6.25 9.41 6.25 9C6.25 8.59 6.59 8.25 7 8.25H12C12.41 8.25 12.75 8.59 12.75 9C12.75 9.41 12.41 9.75 12 9.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default MessagesBoldIcon;
      