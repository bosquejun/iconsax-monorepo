
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const QuoteUpBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M10.3702 18.1401C10.3702 19.5601 9.32022 20.72 7.79022 20.72H4.57025C3.15025 20.72 1.99023 19.5601 1.99023 18.1401L1.99023 12.3401" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2 12.3501H7.79999C8.75999 12.3501 9.52002 12.8001 9.96002 13.4901" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2 12.35C2 6.29998 3.13003 5.30003 6.53003 3.28003" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M13.6309 12.3501H19.4308C20.9608 12.3501 22.0109 13.5101 22.0109 14.9301V18.1501C22.0109 19.5701 20.9608 20.7301 19.4308 20.7301H16.2109C14.7909 20.7301 13.6309 19.5701 13.6309 18.1501V12.3501" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M13.6309 12.35C13.6309 6.29998 14.7608 5.30003 18.1608 3.28003" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default QuoteUpBrokenIcon;
      