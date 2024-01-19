
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MessageSearchBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M17 2H7C4.24 2 2 4.23 2 6.98V12.96V13.96C2 16.71 4.24 18.94 7 18.94H8.5C8.77 18.94 9.13 19.12 9.3 19.34L10.8 21.33C11.46 22.21 12.54 22.21 13.2 21.33L14.7 19.34C14.89 19.09 15.19 18.94 15.5 18.94H17C19.76 18.94 22 16.71 22 13.96V6.98C22 4.23 19.76 2 17 2ZM15.66 14.53C15.51 14.68 15.32 14.75 15.13 14.75C14.94 14.75 14.75 14.68 14.6 14.53L13.86 13.79C13.28 14.17 12.58 14.4 11.83 14.4C9.79 14.4 8.13 12.74 8.13 10.7C8.13 8.66 9.78 7 11.83 7C13.88 7 15.53 8.66 15.53 10.7C15.53 11.45 15.3 12.15 14.92 12.73L15.66 13.47C15.95 13.76 15.95 14.24 15.66 14.53Z" fill={color} />
        </svg>
      )
    }
    
    
    export default MessageSearchBoldIcon;
      