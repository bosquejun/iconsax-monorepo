
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const RotateRightBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M16.75 22H12.25C8.5 22 7 20.5 7 16.75V12.25C7 8.5 8.5 7 12.25 7H16.75C20.5 7 22 8.5 22 12.25V16.75C22 20.5 20.5 22 16.75 22Z" fill={color} />
<path d="M2.75 10.5C3.16 10.5 3.5 10.16 3.5 9.75C3.5 6.79 5.56 4.31 8.33 3.66L8.06 4.11C7.85 4.47 7.96 4.93 8.32 5.14C8.68 5.35 9.14 5.24 9.35 4.88L10.4 3.13C10.54 2.9 10.54 2.61 10.41 2.38C10.27 2.15 10.02 2 9.75 2C5.48 2 2 5.48 2 9.75C2 10.16 2.34 10.5 2.75 10.5Z" fill={color} />
        </svg>
      )
    }
    
    
    export default RotateRightBulkIcon;
      