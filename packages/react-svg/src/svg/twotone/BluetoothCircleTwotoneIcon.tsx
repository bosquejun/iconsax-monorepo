
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const BluetoothCircleTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M8.58984 15.5599L15.2098 9.4899C15.4898 9.2399 15.4798 8.83992 15.1898 8.59992L13.1299 6.87992C12.5899 6.42992 12.1599 6.63991 12.1599 7.33991V16.6699C12.1599 17.3699 12.5999 17.5699 13.1299 17.1299L15.1898 15.4099C15.4798 15.1699 15.4898 14.7699 15.2098 14.5199L8.58984 8.44992" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default BluetoothCircleTwotoneIcon;
      