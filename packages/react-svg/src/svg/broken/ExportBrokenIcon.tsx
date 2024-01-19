
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ExportBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12 15.0001V3.62012" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M15.3504 5.85L12.0004 2.5L8.65039 5.85" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M8.74047 21.4999C4.27047 21.4999 2.48047 19.7099 2.48047 15.2399V15.1099C2.48047 11.0899 3.93047 9.23991 7.47047 8.90991" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M16.4398 8.8999C20.0398 9.2099 21.5098 11.0599 21.5098 15.1099V15.2399C21.5098 19.7099 19.7198 21.4999 15.2498 21.4999H13.0098" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default ExportBrokenIcon;
      