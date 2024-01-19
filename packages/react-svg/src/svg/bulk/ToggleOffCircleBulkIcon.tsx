
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ToggleOffCircleBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M13.86 3.85986H10.14C5.65 3.85986 2 7.50986 2 11.9999C2 16.4899 5.65 20.1399 10.14 20.1399H13.86C18.35 20.1399 22 16.4899 22 11.9999C22 7.50986 18.35 3.85986 13.86 3.85986Z" fill={color} />
<path d="M10.1407 16.4201C12.5818 16.4201 14.5607 14.4412 14.5607 12.0001C14.5607 9.55898 12.5818 7.58008 10.1407 7.58008C7.6996 7.58008 5.7207 9.55898 5.7207 12.0001C5.7207 14.4412 7.6996 16.4201 10.1407 16.4201Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ToggleOffCircleBulkIcon;
      