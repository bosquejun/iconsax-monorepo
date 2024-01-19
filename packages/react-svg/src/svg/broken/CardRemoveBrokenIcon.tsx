
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const CardRemoveBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M6 10.03H21.9" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M11.4604 20.53H6.35034C2.80034 20.53 1.90039 19.65 1.90039 16.14V7.92004C1.90039 4.74004 2.64036 3.72004 5.43036 3.56004C5.71036 3.55004 6.02034 3.54004 6.35034 3.54004H17.4604C21.0104 3.54004 21.9103 4.42004 21.9103 7.93004V12.34" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M17.9004 22.03C20.1095 22.03 21.9004 20.2392 21.9004 18.03C21.9004 15.8209 20.1095 14.03 17.9004 14.03C15.6913 14.03 13.9004 15.8209 13.9004 18.03C13.9004 20.2392 15.6913 22.03 17.9004 22.03Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M18.9694 19.15L16.8594 17.03" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M18.9501 17.0601L16.8301 19.1701" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M5.90039 16.03H9.90039" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default CardRemoveBrokenIcon;
      