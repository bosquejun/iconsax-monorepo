
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MusicCircleTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M2.58008 8.66998C3.20008 6.90998 4.30009 5.37998 5.72009 4.22998" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2 12C2 13.17 2.20999 14.29 2.57999 15.33" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M9.08984 21.5703C10.0098 21.8503 10.9898 22.0002 11.9998 22.0002C17.5198 22.0002 21.9998 17.5202 21.9998 12.0002C21.9998 11.4002 21.9398 10.8102 21.8398 10.2402" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M5.7204 19.7502C5.2504 19.3702 4.80039 18.9502 4.40039 18.4902" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M20.2398 6.34003C18.4398 3.72003 15.4198 2 11.9998 2C10.9898 2 10.0098 2.14999 9.08984 2.42999" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default MusicCircleTwotoneIcon;
      