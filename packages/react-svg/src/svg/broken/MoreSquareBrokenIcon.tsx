
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MoreSquareBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M2 12.96V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M15.9965 12H16.0054" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
<path d="M11.9945 12H12.0035" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
<path d="M7.99451 12H8.00349" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default MoreSquareBrokenIcon;
      