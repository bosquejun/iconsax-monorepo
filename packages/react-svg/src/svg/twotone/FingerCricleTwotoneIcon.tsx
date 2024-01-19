
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const FingerCricleTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M11.9996 14.8799C11.0896 14.8799 10.3496 14.1399 10.3496 13.2299V10.7599C10.3496 9.84989 11.0896 9.10986 11.9996 9.10986C12.9096 9.10986 13.6496 9.84989 13.6496 10.7599V13.2299C13.6496 14.1399 12.9096 14.8799 11.9996 14.8799Z" stroke={color} stroke-width="1.5" stroke-linecap="round" />
<path opacity="0.4" d="M16.98 13.4702C16.78 16.0502 14.62 18.0702 12 18.0702C9.24 18.0702 7 15.8302 7 13.0702V10.9302C7 8.17018 9.24 5.93018 12 5.93018C14.59 5.93018 16.72 7.90017 16.97 10.4202" stroke={color} stroke-width="1.5" stroke-linecap="round" />
        </svg>
      )
    }
    
    
    export default FingerCricleTwotoneIcon;
      