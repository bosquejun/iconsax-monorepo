
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const CheckBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M15 22C14.59 22 14.25 21.66 14.25 21.25V2.75C14.25 2.34 14.59 2 15 2C15.41 2 15.75 2.34 15.75 2.75V21.25C15.75 21.66 15.41 22 15 22Z" fill={color} />
<path d="M18 20H15V4H18C20.21 4 22 5.79 22 8V16C22 18.21 20.21 20 18 20Z" fill={color} />
<path d="M6 4C3.79 4 2 5.79 2 8V16C2 18.21 3.79 20 6 20H11C11.55 20 12 19.55 12 19V5C12 4.45 11.55 4 11 4H6ZM7.75 15.5C7.75 15.91 7.41 16.25 7 16.25C6.59 16.25 6.25 15.91 6.25 15.5V8.5C6.25 8.09 6.59 7.75 7 7.75C7.41 7.75 7.75 8.09 7.75 8.5V15.5Z" fill={color} />
        </svg>
      )
    }
    
    
    export default CheckBoldIcon;
      