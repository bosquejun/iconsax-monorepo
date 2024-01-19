
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const StrongboxBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M13.25 12.5802V14.5602C13.25 15.2502 12.69 15.8102 12 15.8102C11.31 15.8102 10.75 15.2502 10.75 14.5602V12.5802C10.39 12.3602 10.11 12.0402 9.91 11.6602H3C2.45 11.6602 2 12.1102 2 12.6602V16.1902C2 19.4002 4.6 22.0002 7.81 22.0002H16.18C19.4 22.0002 22 19.4002 22 16.1902V12.6602C22 12.1102 21.55 11.6602 21 11.6602H14.09C13.89 12.0402 13.61 12.3602 13.25 12.5802Z" fill={color} />
<path d="M16.19 2H7.81C4.6 2 2 4.6 2 7.81V9.16C2 9.71 2.45 10.16 3 10.16H9.67C9.9 8.84 11.21 7.9 12.64 8.28C13.44 8.49 14.09 9.14 14.3 9.94C14.32 10.01 14.32 10.09 14.33 10.16H21C21.55 10.16 22 9.71 22 9.16V7.81C22 4.6 19.4 2 16.19 2Z" fill={color} />
        </svg>
      )
    }
    
    
    export default StrongboxBoldIcon;
      