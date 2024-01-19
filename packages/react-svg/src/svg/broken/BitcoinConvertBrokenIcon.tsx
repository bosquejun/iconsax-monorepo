
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const BitcoinConvertBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M23 15.97C23 19.84 19.87 22.97 16 22.97L17.05 21.22" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M1 7.96997C1 4.09997 4.13 0.969971 8 0.969971L6.95 2.71997" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M6.61914 13.0698H9.42914C10.0491 13.0698 10.5591 13.6298 10.5591 14.1998C10.5591 14.8198 10.0591 15.3298 9.42914 15.3298H6.61914V13.0698Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M6.61914 15.3301H9.83914C10.5491 15.3301 11.1291 15.8301 11.1291 16.4601C11.1291 17.0801 10.5491 17.5901 9.83914 17.5901H6.61914V15.3301Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M8.41992 17.5801V18.7001" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M8.41992 11.95V13.0699" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2.5 15.33C2.5 11.92 5.26 9.15991 8.67 9.15991C8.83 9.15991 8.98 9.16993 9.15 9.17993C12.18 9.40993 14.6 11.8299 14.83 14.8599C14.84 15.0199 14.85 15.17 14.85 15.34C14.85 18.75 12.09 21.5099 8.68 21.5099C6.55 21.5099 4.67 20.4299 3.56 18.7899" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M21.5002 8.66998C21.5002 12.08 18.7402 14.84 15.3302 14.84H14.8402C14.6102 11.81 12.1902 9.38997 9.16016 9.15997V8.66998C9.16016 5.25998 11.9202 2.5 15.3302 2.5C17.1302 2.5 18.7502 3.27 19.8802 4.5" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default BitcoinConvertBrokenIcon;
      