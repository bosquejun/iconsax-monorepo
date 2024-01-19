
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ToggleOffBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M16.65 3.85986H7.35C3.25 3.85986 2 5.10986 2 9.20986V14.7899C2 18.8899 3.25 20.1399 7.35 20.1399H16.65C20.75 20.1399 22 18.8899 22 14.7899V9.20986C22 5.10986 20.75 3.85986 16.65 3.85986Z" fill={color} />
<path d="M10.7898 7.58008H8.55977C6.30977 7.58008 5.25977 8.63008 5.25977 10.8801V13.1101C5.25977 15.3601 6.30977 16.4101 8.55977 16.4101H10.7898C13.0398 16.4101 14.0898 15.3601 14.0898 13.1101V10.8801C14.0898 8.63008 13.0398 7.58008 10.7898 7.58008Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ToggleOffBulkIcon;
      