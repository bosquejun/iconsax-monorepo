
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const FlashCircle1BrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M8.68055 12.7201H10.4205V16.7701C10.4205 17.3701 11.1605 17.6501 11.5605 17.2001L15.8205 12.3601C16.1905 11.9401 15.8905 11.2801 15.3305 11.2801H13.5905V7.23008C13.5905 6.63008 12.8505 6.35008 12.4505 6.80008L8.19055 11.6401C7.82055 12.0601 8.12055 12.7201 8.68055 12.7201Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default FlashCircle1BrokenIcon;
      