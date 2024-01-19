
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const WatchOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M15.5 19.75H8.5C5.76 19.75 4.25 18.24 4.25 15.5V8.5C4.25 5.76 5.76 4.25 8.5 4.25H15.5C18.24 4.25 19.75 5.76 19.75 8.5V15.5C19.75 18.24 18.24 19.75 15.5 19.75ZM8.5 5.75C6.57 5.75 5.75 6.57 5.75 8.5V15.5C5.75 17.43 6.57 18.25 8.5 18.25H15.5C17.43 18.25 18.25 17.43 18.25 15.5V8.5C18.25 6.57 17.43 5.75 15.5 5.75H8.5Z" fill={color} />
<path d="M16 2.75H8C7.59 2.75 7.25 2.41 7.25 2C7.25 1.59 7.59 1.25 8 1.25H16C16.41 1.25 16.75 1.59 16.75 2C16.75 2.41 16.41 2.75 16 2.75Z" fill={color} />
<path d="M16 22.75H8C7.59 22.75 7.25 22.41 7.25 22C7.25 21.59 7.59 21.25 8 21.25H16C16.41 21.25 16.75 21.59 16.75 22C16.75 22.41 16.41 22.75 16 22.75Z" fill={color} />
<path d="M14.5 13.25H11.5C11.09 13.25 10.75 12.91 10.75 12.5V9.5C10.75 9.09 11.09 8.75 11.5 8.75C11.91 8.75 12.25 9.09 12.25 9.5V11.75H14.5C14.91 11.75 15.25 12.09 15.25 12.5C15.25 12.91 14.91 13.25 14.5 13.25Z" fill={color} />
        </svg>
      )
    }
    
    
    export default WatchOutlineIcon;
      