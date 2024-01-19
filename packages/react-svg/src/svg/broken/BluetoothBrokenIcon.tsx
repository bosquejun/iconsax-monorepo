
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const BluetoothBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M14.9494 3.38999L13.8194 2.43998C12.8194 1.60998 11.9994 1.98998 11.9994 3.28998V20.71C11.9994 22.01 12.8194 22.39 13.8194 21.56L17.6694 18.35C18.2094 17.9 18.2194 17.15 17.7094 16.68L5.35938 5.35996" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M5.35938 18.64L17.7094 7.32004C18.2194 6.85004 18.2094 6.10002 17.6694 5.65002" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default BluetoothBrokenIcon;
      