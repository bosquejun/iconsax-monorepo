
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ToggleOnBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M7.35 3.85986H16.65C20.75 3.85986 22 5.10986 22 9.20986V14.7899C22 18.8899 20.75 20.1399 16.65 20.1399H7.35C3.25 20.1399 2 18.8899 2 14.7899V9.20986C2 5.10986 3.25 3.85986 7.35 3.85986Z" fill={color} />
<path d="M13.2102 7.58008H15.4402C17.6902 7.58008 18.7402 8.63008 18.7402 10.8801V13.1101C18.7402 15.3601 17.6902 16.4101 15.4402 16.4101H13.2102C10.9602 16.4101 9.91016 15.3601 9.91016 13.1101V10.8801C9.91016 8.63008 10.9602 7.58008 13.2102 7.58008Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ToggleOnBulkIcon;
      