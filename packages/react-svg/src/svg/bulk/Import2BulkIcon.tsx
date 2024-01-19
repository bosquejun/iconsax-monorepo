
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Import2BulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill={color} />
<path d="M7.75 17.5H12.58C12.99 17.5 13.33 17.16 13.33 16.75C13.33 16.34 12.99 16 12.58 16H9.56L17.28 8.28C17.57 7.99 17.57 7.51 17.28 7.22C17.13 7.07 16.94 7 16.75 7C16.56 7 16.37 7.07 16.22 7.22L8.5 14.94V11.92C8.5 11.51 8.16 11.17 7.75 11.17C7.34 11.17 7 11.51 7 11.92V16.75C7 17.16 7.34 17.5 7.75 17.5Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Import2BulkIcon;
      