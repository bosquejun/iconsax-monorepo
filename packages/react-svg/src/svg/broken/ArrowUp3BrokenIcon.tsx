
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ArrowUp3BrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M16.0101 11.1499L13.4001 8.52989C12.6301 7.75989 11.3701 7.75989 10.6001 8.52989L4.08008 15.0499" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M19.9209 15.05L18.8809 14.01" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default ArrowUp3BrokenIcon;
      