
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const DropBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M3.90039 13.9C3.90039 18.36 7.5304 22 12.0004 22C16.4704 22 20.1004 18.37 20.1004 13.91C20.1304 8.47996 14.5004 3.66996 12.6104 2.20996" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12.6109 2.21C12.2509 1.93 11.751 1.93 11.391 2.21C10.011 3.26 6.67094 6.04 4.96094 9.6" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default DropBrokenIcon;
      