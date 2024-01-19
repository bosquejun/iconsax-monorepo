
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Grid1BulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M8.51 2V8.5H2V7.81C2 4.17 4.17 2 7.81 2H8.51Z" fill={color} />
<path d="M21.9998 7.81V8.5H15.5098V2H16.1898C19.8298 2 21.9998 4.17 21.9998 7.81Z" fill={color} />
<path d="M21.9998 15.5V16.19C21.9998 19.83 19.8298 22 16.1898 22H15.5098V15.5H21.9998Z" fill={color} />
<path d="M8.51 15.5V22H7.81C4.17 22 2 19.83 2 16.19V15.5H8.51Z" fill={color} />
<path opacity="0.4" d="M8.51 8.5H2V15.5H8.51V8.5Z" fill={color} />
<path opacity="0.4" d="M21.9998 8.5H15.5098V15.5H21.9998V8.5Z" fill={color} />
<path d="M15.5098 8.5H8.50977V15.5H15.5098V8.5Z" fill={color} />
<path opacity="0.4" d="M15.5098 2H8.50977V8.5H15.5098V2Z" fill={color} />
<path opacity="0.4" d="M15.5098 15.5H8.50977V22H15.5098V15.5Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Grid1BulkIcon;
      