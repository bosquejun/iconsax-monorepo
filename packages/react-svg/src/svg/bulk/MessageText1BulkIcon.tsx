
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MessageText1BulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M2 12.97V6.99C2 4.23 4.24 2 7 2H17C19.76 2 22 4.23 22 6.99V13.97C22 16.72 19.76 18.95 17 18.95H15.5C15.19 18.95 14.89 19.1 14.7 19.35L13.2 21.34C12.54 22.22 11.46 22.22 10.8 21.34L9.3 19.35C9.14 19.13 8.78 18.95 8.5 18.95H7C4.24 18.95 2 16.72 2 13.97V12.97Z" fill={color} />
<path d="M17 8.75H7C6.59 8.75 6.25 8.41 6.25 8C6.25 7.59 6.59 7.25 7 7.25H17C17.41 7.25 17.75 7.59 17.75 8C17.75 8.41 17.41 8.75 17 8.75Z" fill={color} />
<path d="M13 13.75H7C6.59 13.75 6.25 13.41 6.25 13C6.25 12.59 6.59 12.25 7 12.25H13C13.41 12.25 13.75 12.59 13.75 13C13.75 13.41 13.41 13.75 13 13.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default MessageText1BulkIcon;
      