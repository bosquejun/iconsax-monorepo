
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const PaintbucketBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M15.0006 4.32996C12.4106 1.73996 11.2806 2.38996 9.3406 4.32996L3.7706 9.89996C1.3806 12.29 1.1806 12.96 3.7706 15.56L7.2306 19.02C9.6606 21.45 10.4906 21.41 12.8906 19.02L18.4606 13.45C20.4006 11.51 20.8906 10.22 18.4606 7.78996" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M19.1995 16.79L18.5395 17.88C17.6095 19.43 18.3295 20.7 20.1395 20.7C21.9495 20.7 22.6695 19.43 21.7395 17.88L21.0795 16.79C20.5595 15.93 19.7095 15.93 19.1995 16.79Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2 12.2398C7.56 10.7298 13.42 10.6798 19 12.1098L19.5 12.2398" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default PaintbucketBrokenIcon;
      