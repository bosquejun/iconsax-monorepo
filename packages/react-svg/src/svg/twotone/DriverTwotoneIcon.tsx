
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const DriverTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M19.3198 9.99977H4.68977C3.20977 9.99977 2.00977 8.78978 2.00977 7.31978V4.68977C2.00977 3.20977 3.21977 2.00977 4.68977 2.00977H19.3198C20.7998 2.00977 21.9998 3.21977 21.9998 4.68977V7.31978C21.9998 8.78978 20.7898 9.99977 19.3198 9.99977Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M19.3198 21.9998H4.68977C3.20977 21.9998 2.00977 20.7898 2.00977 19.3198V16.6898C2.00977 15.2098 3.21977 14.0098 4.68977 14.0098H19.3198C20.7998 14.0098 21.9998 15.2198 21.9998 16.6898V19.3198C21.9998 20.7898 20.7898 21.9998 19.3198 21.9998Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M6 5V7" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M10 5V7" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M6 17V19" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M10 17V19" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M14 6H18" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M14 18H18" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default DriverTwotoneIcon;
      