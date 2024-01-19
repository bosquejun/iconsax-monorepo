
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const HospitalBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M22 21.25H2C1.59 21.25 1.25 21.59 1.25 22C1.25 22.41 1.59 22.75 2 22.75H22C22.41 22.75 22.75 22.41 22.75 22C22.75 21.59 22.41 21.25 22 21.25Z" fill={color} />
<path d="M17 2H7C4 2 3 3.79 3 6V22H9V15.94C9 15.42 9.42 15 9.94 15H14.07C14.58 15 15.01 15.42 15.01 15.94V22H21.01V6C21 3.79 20 2 17 2ZM14.5 9.25H12.75V11C12.75 11.41 12.41 11.75 12 11.75C11.59 11.75 11.25 11.41 11.25 11V9.25H9.5C9.09 9.25 8.75 8.91 8.75 8.5C8.75 8.09 9.09 7.75 9.5 7.75H11.25V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V7.75H14.5C14.91 7.75 15.25 8.09 15.25 8.5C15.25 8.91 14.91 9.25 14.5 9.25Z" fill={color} />
        </svg>
      )
    }
    
    
    export default HospitalBoldIcon;
      