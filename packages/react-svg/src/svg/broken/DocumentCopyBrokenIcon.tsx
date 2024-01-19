
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const DocumentCopyBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M2 12.6C2 8.6 3.6 7 7.6 7H10.6" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M17 13.3999V16.3999C17 20.3999 15.4 21.9999 11.4 21.9999H7.6C3.6 21.9999 2 20.3999 2 16.3999" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M13.7996 13.4C11.3996 13.4 10.5996 12.6 10.5996 10.2V7L16.9996 13.4" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M11.5996 2H15.5996" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M7 5C7 3.34 8.34 2 10 2H12.62" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M21.9995 8V14.19C21.9995 15.74 20.7395 17 19.1895 17" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M22 8H19C16.75 8 16 7.25 16 5V2L22 8Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default DocumentCopyBrokenIcon;
      