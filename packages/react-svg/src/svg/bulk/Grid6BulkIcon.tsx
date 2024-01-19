
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Grid6BulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M22 7.81V8.5H9V2H16.19C19.83 2 22 4.17 22 7.81Z" fill={color} />
<path opacity="0.4" d="M22 15.5V16.19C22 19.83 19.83 22 16.19 22H9V15.5H22Z" fill={color} />
<path d="M9 2V22H7.81C4.17 22 2 19.83 2 16.19V7.81C2 4.17 4.17 2 7.81 2H9Z" fill={color} />
<path opacity="0.6" d="M22 8.5H9V15.5H22V8.5Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Grid6BulkIcon;
      