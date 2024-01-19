
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const RotateRightBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M3.33008 13.3299C3.33008 18.1199 7.21008 21.9999 12.0001 21.9999C16.7901 21.9999 20.6701 18.1199 20.6701 13.3299C20.6701 11.5499 20.1301 9.8899 19.2101 8.5099M14.8901 5.0799C14.0201 4.8199 13.0601 4.6499 12.0001 4.6499C8.79008 4.6499 5.98008 6.3999 4.49008 8.9899" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M15.1302 5.32L12.2402 2" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M15.1298 5.32007L11.7598 7.78007" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default RotateRightBrokenIcon;
      