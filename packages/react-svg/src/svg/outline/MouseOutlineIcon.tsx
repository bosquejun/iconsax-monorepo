
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MouseOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12 22.75C7.45 22.75 3.75 19.05 3.75 14.5V9.5C3.75 4.95 7.45 1.25 12 1.25C16.55 1.25 20.25 4.95 20.25 9.5V14.5C20.25 19.05 16.55 22.75 12 22.75ZM12 2.75C8.28 2.75 5.25 5.78 5.25 9.5V14.5C5.25 18.22 8.28 21.25 12 21.25C15.72 21.25 18.75 18.22 18.75 14.5V9.5C18.75 5.78 15.72 2.75 12 2.75Z" fill={color} />
<path d="M12 11.75C10.76 11.75 9.75 10.74 9.75 9.5V7.5C9.75 6.26 10.76 5.25 12 5.25C13.24 5.25 14.25 6.26 14.25 7.5V9.5C14.25 10.74 13.24 11.75 12 11.75ZM12 6.75C11.59 6.75 11.25 7.09 11.25 7.5V9.5C11.25 9.91 11.59 10.25 12 10.25C12.41 10.25 12.75 9.91 12.75 9.5V7.5C12.75 7.09 12.41 6.75 12 6.75Z" fill={color} />
<path d="M12 6.75C11.59 6.75 11.25 6.41 11.25 6V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2V6C12.75 6.41 12.41 6.75 12 6.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default MouseOutlineIcon;
      