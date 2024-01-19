
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ToggleOnCircleBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M10.14 3.85986H13.86C18.35 3.85986 22 7.50986 22 11.9999C22 16.4899 18.35 20.1399 13.86 20.1399H10.14C5.65 20.1399 2 16.4899 2 11.9999C2 7.50986 5.65 3.85986 10.14 3.85986Z" fill={color} />
<path d="M13.8595 16.4201C16.3006 16.4201 18.2795 14.4412 18.2795 12.0001C18.2795 9.55898 16.3006 7.58008 13.8595 7.58008C11.4184 7.58008 9.43945 9.55898 9.43945 12.0001C9.43945 14.4412 11.4184 16.4201 13.8595 16.4201Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ToggleOnCircleBulkIcon;
      