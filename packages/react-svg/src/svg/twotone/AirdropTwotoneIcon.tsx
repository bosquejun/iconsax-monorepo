
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const AirdropTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M14.1297 11.3401C14.5197 9.70008 13.0897 8.27003 11.4497 8.66003C10.6797 8.85003 10.0497 9.48005 9.85974 10.2501C9.46974 11.8901 10.8997 13.32 12.5397 12.93C13.3197 12.74 13.9497 12.1101 14.1297 11.3401Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M18.0099 17.19C19.7199 15.59 20.7899 13.32 20.7899 10.79C20.7899 5.92998 16.85 2 12 2C7.14995 2 3.20996 5.93998 3.20996 10.79C3.20996 13.33 4.28996 15.62 6.01996 17.22" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M7.99977 14.5498C7.07977 13.5698 6.50977 12.2498 6.50977 10.7898C6.50977 7.75979 8.96977 5.2998 11.9998 5.2998C15.0298 5.2998 17.4898 7.75979 17.4898 10.7898C17.4898 12.2498 16.9198 13.5598 15.9998 14.5498" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M10.2997 16.6598L8.85973 18.4498C7.71973 19.8798 8.72973 21.9898 10.5597 21.9898H13.4297C15.2597 21.9898 16.2797 19.8698 15.1297 18.4498L13.6897 16.6598C12.8297 15.5698 11.1697 15.5698 10.2997 16.6598Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default AirdropTwotoneIcon;
      