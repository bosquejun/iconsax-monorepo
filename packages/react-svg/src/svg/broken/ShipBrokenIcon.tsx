
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ShipBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M5.10973 20.4599C3.93973 19.4899 3.13974 18.1199 2.77974 16.5199L2.36974 14.6599C2.16974 13.7499 2.70973 12.7199 3.57973 12.3699L4.99974 11.7999L10.5098 9.58993C11.4698 9.20993 12.5297 9.20993 13.4897 9.58993L18.9997 11.7999L20.4198 12.3699C21.2898 12.7199 21.8297 13.7499 21.6297 14.6599L21.2197 16.5199C20.5097 19.7199 17.9997 21.9999 14.3797 21.9999H9.61974" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12 22V10" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M19 8V11.8L13.49 9.59C12.53 9.21 11.47 9.21 10.51 9.59L5 11.8V8C5 6.35 6.35 5 8 5H16C17.65 5 19 6.35 19 8Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M14.5 5H9.5V3C9.5 2.45 9.95 2 10.5 2H13.5C14.05 2 14.5 2.45 14.5 3V5Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default ShipBrokenIcon;
      