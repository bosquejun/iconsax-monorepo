
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MessageTextBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z" fill={color} />
<path d="M17 8.75H7C6.59 8.75 6.25 9.09 6.25 9.5C6.25 9.91 6.59 10.25 7 10.25H17C17.41 10.25 17.75 9.91 17.75 9.5C17.75 9.09 17.41 8.75 17 8.75Z" fill={color} />
<path d="M14 13.75H7C6.59 13.75 6.25 14.09 6.25 14.5C6.25 14.91 6.59 15.25 7 15.25H14C14.41 15.25 14.75 14.91 14.75 14.5C14.75 14.09 14.41 13.75 14 13.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default MessageTextBulkIcon;
      