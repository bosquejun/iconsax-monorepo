
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const GeminiTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M2 2C8.16 5.69 15.84 5.69 22 2" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2 21.9999C8.16 18.3099 15.84 18.3099 22 21.9999" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M5.2998 3.58008L5.42981 3.82007C8.16981 9.03007 8.11981 15.25 5.32981 20.41" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M18.6703 20.41C15.8903 15.25 15.8403 9.03007 18.5703 3.82007L18.7003 3.58008" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default GeminiTwotoneIcon;
      