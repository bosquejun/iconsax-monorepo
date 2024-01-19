
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const HealthLinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M8.96997 22H14.97C19.97 22 21.97 20 21.97 15V9C21.97 4 19.97 2 14.97 2H8.96997C3.96997 2 1.96997 4 1.96997 9V15C1.96997 20 3.96997 22 8.96997 22Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M1.96997 12.7001L7.96997 12.6801C8.71997 12.6801 9.55997 13.2501 9.83997 13.9501L10.98 16.8301C11.24 17.4801 11.65 17.4801 11.91 16.8301L14.2 11.0201C14.42 10.4601 14.83 10.4401 15.11 10.9701L16.15 12.9401C16.46 13.5301 17.26 14.0101 17.92 14.0101H21.98" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default HealthLinearIcon;
      