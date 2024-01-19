
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const StarSlashBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M16.0502 7.67001C15.8102 7.49001 15.6102 7.26001 15.5002 7.03001L13.7402 3.51001C12.7902 1.60001 11.2302 1.60001 10.2702 3.51001L8.50016 7.03001C8.38016 7.28001 8.16016 7.51001 7.91016 7.70001" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M5.28089 18.65L5.85089 16.18C5.98089 15.6 5.75089 14.79 5.33089 14.37L2.85089 11.89C1.39089 10.43 1.86089 8.94999 3.90089 8.60999" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M20.0995 8.60999C22.1395 8.94999 22.6195 10.43 21.1495 11.89L18.6695 14.37C18.2495 14.79 18.0195 15.6 18.1495 16.18L18.8595 19.25C19.4195 21.68 18.1295 22.62 15.9795 21.35L12.9895 19.58C12.4495 19.26 11.5595 19.26 11.0095 19.58L8.01953 21.35" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M22 2L2 22" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default StarSlashBrokenIcon;
      