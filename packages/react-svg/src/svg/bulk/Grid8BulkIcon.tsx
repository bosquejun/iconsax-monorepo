
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Grid8BulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M22 7.81V12H15.75V2H16.19C19.83 2 22 4.17 22 7.81Z" fill={color} />
<path d="M22 12V16.19C22 19.83 19.83 22 16.19 22H15.75V12H22Z" fill={color} />
<path d="M8.25 12V22H7.81C4.17 22 2 19.83 2 16.19V12H8.25Z" fill={color} />
<path opacity="0.4" d="M7.81 2C4.17 2 2 4.17 2 7.81V12H8.25V2H7.81Z" fill={color} />
<path d="M15.75 2H8.25V12H15.75V2Z" fill={color} />
<path opacity="0.4" d="M15.75 12H8.25V22H15.75V12Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Grid8BulkIcon;
      