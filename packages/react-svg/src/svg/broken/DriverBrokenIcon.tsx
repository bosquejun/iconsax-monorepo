
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const DriverBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M17.3198 10H4.68977C3.20977 10 2.00977 8.79002 2.00977 7.32002V4.69002C2.00977 3.21002 3.21977 2.01001 4.68977 2.01001H19.3198C20.7998 2.01001 21.9998 3.22002 21.9998 4.69002V7.32002" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M19.3198 22H4.68977C3.20977 22 2.00977 20.79 2.00977 19.32V16.69C2.00977 15.21 3.21977 14.01 4.68977 14.01H19.3198C20.7998 14.01 21.9998 15.22 21.9998 16.69V19.32C21.9998 20.79 20.7898 22 19.3198 22Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M6 5V7" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M10 5V7" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M6 17V19" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M10 17V19" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M14 6H18" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M14 18H18" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default DriverBrokenIcon;
      