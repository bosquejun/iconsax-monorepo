
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const PlayCricleBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M19.0703 19.0699C22.9803 15.1599 22.9803 8.82993 19.0703 4.92993" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M4.93055 4.92993C1.02055 8.83993 1.02055 15.1699 4.93055 19.0699" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M8.69922 21.4099C9.76922 21.7799 10.8792 21.96 11.9992 21.96C13.1192 21.95 14.2292 21.7799 15.2992 21.4099" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M8.69922 2.59009C9.76922 2.22009 10.8792 2.04004 11.9992 2.04004C13.1192 2.04004 14.2292 2.22009 15.2992 2.59009" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M8.74023 10.3302C8.74023 8.25016 10.2103 7.40014 12.0103 8.44014L13.4602 9.28017L14.9102 10.1201C16.7102 11.1601 16.7102 12.8602 14.9102 13.9002L13.4602 14.7401L12.0103 15.5802C10.2103 16.6202 8.74023 15.7701 8.74023 13.6901" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default PlayCricleBrokenIcon;
      