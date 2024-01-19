
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const LocationSlashTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M10.4209 12.9999C9.50086 12.4599 8.88086 11.4599 8.88086 10.3099C8.88086 8.58994 10.2709 7.18994 12.0009 7.18994C13.1509 7.18994 14.1509 7.80994 14.6909 8.73994" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M5.9891 17.8101C4.1491 15.3001 2.8091 12.0901 3.6291 8.49011C5.2791 1.23011 14.5691 0.0601072 18.6791 4.98011" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M20.3806 8.5C21.5306 13.58 18.3706 17.88 15.6006 20.54C13.5906 22.48 10.4106 22.48 8.39062 20.54" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M22 2L2 22" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default LocationSlashTwotoneIcon;
      