
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const CloudSunnyBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M7.25945 5.43006C9.73945 3.42006 13.7595 3.32006 15.9995 6.03006V6.04006C16.6995 6.90006 17.2295 8.04006 17.4695 9.49006C18.7995 9.66006 19.8795 10.3101 20.6495 11.2301C22.3995 13.3001 22.5495 16.6801 20.2695 18.6801C19.2795 19.5901 17.9795 20.0901 16.6295 20.0801H5.53945C0.869454 19.7401 0.859454 12.9401 5.53945 12.6001H5.58945C5.10945 11.2601 5.00945 10.0401 5.17945 8.96006" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M7.25984 13.0101C6.73984 12.7501 6.16984 12.6101 5.58984 12.6001" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M15.8496 9.92001C16.3696 9.66001 16.9396 9.52001 17.5196 9.51001" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M21.97 8.5C21.97 9.6 21.46 10.59 20.65 11.23C19.88 10.31 18.8 9.66 17.47 9.49C17.23 8.04 16.7 6.9 16 6.04V6.03C16.63 5.39 17.51 5 18.47 5C20.4 5 21.97 6.57 21.97 8.5Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default CloudSunnyBrokenIcon;
      