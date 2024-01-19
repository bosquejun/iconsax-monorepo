
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const HospitalBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M22 21.25H2C1.59 21.25 1.25 21.59 1.25 22C1.25 22.41 1.59 22.75 2 22.75H22C22.41 22.75 22.75 22.41 22.75 22C22.75 21.59 22.41 21.25 22 21.25Z" fill={color} />
<path opacity="0.4" d="M17 2H7C4 2 3 3.79 3 6V22H21V6C21 3.79 20 2 17 2Z" fill={color} />
<path d="M14.0602 15H9.93022C9.42022 15 8.99023 15.42 8.99023 15.94V22H14.9902V15.94C15.0002 15.42 14.5802 15 14.0602 15Z" fill={color} />
<path d="M14.5 7.75H12.75V6C12.75 5.59 12.41 5.25 12 5.25C11.59 5.25 11.25 5.59 11.25 6V7.75H9.5C9.09 7.75 8.75 8.09 8.75 8.5C8.75 8.91 9.09 9.25 9.5 9.25H11.25V11C11.25 11.41 11.59 11.75 12 11.75C12.41 11.75 12.75 11.41 12.75 11V9.25H14.5C14.91 9.25 15.25 8.91 15.25 8.5C15.25 8.09 14.91 7.75 14.5 7.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default HospitalBulkIcon;
      