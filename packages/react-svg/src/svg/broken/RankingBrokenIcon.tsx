
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const RankingBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M16.0597 21.91C15.7497 21.87 15.3897 21.74 14.9897 21.5L12.7497 20.17C12.3397 19.93 11.6797 19.93 11.2697 20.17L9.02974 21.5C7.41974 22.45 6.44974 21.74 6.86974 19.92L7.39974 17.61C7.49974 17.18 7.31975 16.57 7.00975 16.25L5.14974 14.39C4.04974 13.29 4.40974 12.18 5.93974 11.93L8.32973 11.53C8.72973 11.46 9.20976 11.11 9.38976 10.75L10.7097 8.10998C11.4297 6.67998 12.5997 6.67998 13.3097 8.10998L14.6297 10.75C14.8097 11.11 15.2897 11.47 15.6897 11.53L18.0797 11.93C19.6097 12.19 19.9697 13.29 18.8697 14.39L17.0098 16.25C16.6998 16.56 16.5197 17.17 16.6197 17.61" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M6 9V2" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M18 9V2" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12 4V2" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default RankingBrokenIcon;
      