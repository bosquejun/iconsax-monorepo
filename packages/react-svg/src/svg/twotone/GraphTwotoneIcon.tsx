
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const GraphTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M18.32 12.0002C20.92 12.0002 22 11.0002 21.04 7.72018C20.39 5.51018 18.49 3.61018 16.28 2.96018C13 2.00018 12 3.08018 12 5.68018V8.56018C12 11.0002 13 12.0002 15 12.0002H18.32Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M20.0004 14.6998C19.0704 19.3298 14.6304 22.6898 9.58042 21.8698C5.79042 21.2598 2.74042 18.2098 2.12042 14.4198C1.31042 9.38977 4.65042 4.94977 9.26042 4.00977" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default GraphTwotoneIcon;
      