
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const FlashSlashBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M9.17969 18.04V20.48C9.17969 22.16 10.0897 22.5 11.1997 21.24L18.7697 12.64C19.6997 11.59 19.3097 10.72 17.8997 10.72H16.9697" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M9.98024 5.95996L5.22024 11.37C4.29024 12.42 4.68024 13.29 6.09024 13.29H9.18024V14.47" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M14.8208 8.8399V3.5199C14.8208 1.8399 13.9108 1.4999 12.8008 2.7599" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M22 2L2 22" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default FlashSlashBrokenIcon;
      