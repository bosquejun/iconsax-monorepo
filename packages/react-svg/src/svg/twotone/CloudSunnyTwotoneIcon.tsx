
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const CloudSunnyTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M20.2695 18.6801C19.2795 19.5901 17.9795 20.0901 16.6295 20.0801H5.53945C0.869454 19.7401 0.859454 12.9401 5.53945 12.6001H5.58945C2.88945 5.06014 12.1195 1.34014 15.9995 6.03014V6.04014C16.6995 6.90014 17.2295 8.04014 17.4695 9.49014C18.7995 9.66014 19.8795 10.3101 20.6495 11.2301C22.3995 13.3001 22.5495 16.6801 20.2695 18.6801Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M7.25984 13.0101C6.73984 12.7501 6.16984 12.6101 5.58984 12.6001" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M15.8496 9.91977C16.3696 9.65977 16.9396 9.51977 17.5196 9.50977" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M21.97 8.5C21.97 9.6 21.46 10.59 20.65 11.23C19.88 10.31 18.8 9.66 17.47 9.49C17.23 8.04 16.7 6.9 16 6.04V6.03C16.63 5.39 17.51 5 18.47 5C20.4 5 21.97 6.57 21.97 8.5Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default CloudSunnyTwotoneIcon;
      