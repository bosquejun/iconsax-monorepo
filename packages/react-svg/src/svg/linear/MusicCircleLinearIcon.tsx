
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MusicCircleLinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M2.57996 8.66998C3.19996 6.90998 4.29997 5.37998 5.71997 4.22998" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2 12C2 13.17 2.20999 14.29 2.57999 15.33" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M9.08997 21.57C10.01 21.85 10.99 22 12 22C17.52 22 22 17.52 22 12C22 11.4 21.94 10.81 21.84 10.24" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M5.72003 19.75C5.25003 19.37 4.80002 18.95 4.40002 18.49" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M20.24 6.34003C18.44 3.72003 15.42 2 12 2C10.99 2 10.01 2.14999 9.08997 2.42999" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M8.59 17.1102C9.46813 17.1102 10.18 16.3983 10.18 15.5202C10.18 14.6421 9.46813 13.9302 8.59 13.9302C7.71186 13.9302 7 14.6421 7 15.5202C7 16.3983 7.71186 17.1102 8.59 17.1102Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M16 14.4602V8.25015C16 6.93015 15.17 6.74012 14.33 6.97012L11.15 7.84018C10.57 8.00018 10.17 8.45015 10.17 9.12015V10.2301V10.9701V15.5202" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M14.4101 16.0501C15.2882 16.0501 16.0001 15.3383 16.0001 14.4601C16.0001 13.582 15.2882 12.8701 14.4101 12.8701C13.5319 12.8701 12.8201 13.582 12.8201 14.4601C12.8201 15.3383 13.5319 16.0501 14.4101 16.0501Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M10.1799 10.7602L15.9999 9.17017" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default MusicCircleLinearIcon;
      