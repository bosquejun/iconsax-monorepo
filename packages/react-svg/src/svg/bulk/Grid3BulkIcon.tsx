
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Grid3BulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.6" d="M22 7.81V14.5H12V2H16.19C19.83 2 22 4.17 22 7.81Z" fill={color} />
<path d="M12 9.5V22H7.81C4.17 22 2 19.83 2 16.19V9.5H12Z" fill={color} />
<path opacity="0.4" d="M12 2V9.5H2V7.81C2 4.17 4.17 2 7.81 2H12Z" fill={color} />
<path opacity="0.4" d="M22 14.5V16.19C22 19.83 19.83 22 16.19 22H12V14.5H22Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Grid3BulkIcon;
      