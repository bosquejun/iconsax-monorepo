
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const LocationTickBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M20.6188 8.7C19.5788 4.07 15.5388 2 11.9988 2C11.9988 2 11.9988 2 11.9888 2C8.45877 2 4.42877 4.07 3.37877 8.69C2.19877 13.85 5.35877 18.22 8.21877 20.98C9.27877 22 10.6388 22.51 11.9988 22.51C13.3588 22.51 14.7188 22 15.7688 20.98C18.6288 18.22 21.7888 13.86 20.6188 8.7ZM15.2788 9.53L11.2788 13.53C11.1288 13.68 10.9388 13.75 10.7488 13.75C10.5588 13.75 10.3688 13.68 10.2188 13.53L8.71877 12.03C8.42877 11.74 8.42877 11.26 8.71877 10.97C9.00877 10.68 9.48877 10.68 9.77877 10.97L10.7488 11.94L14.2188 8.47C14.5088 8.18 14.9888 8.18 15.2788 8.47C15.5688 8.76 15.5688 9.24 15.2788 9.53Z" fill={color} />
        </svg>
      )
    }
    
    
    export default LocationTickBoldIcon;
      