
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MessageBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M2 12.97V6.99C2 4.23 4.24 2 7 2H17C19.76 2 22 4.23 22 6.99V13.97C22 16.72 19.76 18.95 17 18.95H15.5C15.19 18.95 14.89 19.1 14.7 19.35L13.2 21.34C12.54 22.22 11.46 22.22 10.8 21.34L9.3 19.35C9.14 19.13 8.78 18.95 8.5 18.95H7C4.24 18.95 2 16.72 2 13.97V12.97Z" fill={color} />
<path d="M12 12C11.44 12 11 11.55 11 11C11 10.45 11.45 10 12 10C12.55 10 13 10.45 13 11C13 11.55 12.56 12 12 12Z" fill={color} />
<path d="M16 12C15.44 12 15 11.55 15 11C15 10.45 15.45 10 16 10C16.55 10 17 10.45 17 11C17 11.55 16.56 12 16 12Z" fill={color} />
<path d="M8 12C7.44 12 7 11.55 7 11C7 10.45 7.45 10 8 10C8.55 10 9 10.45 9 11C9 11.55 8.56 12 8 12Z" fill={color} />
        </svg>
      )
    }
    
    
    export default MessageBulkIcon;
      