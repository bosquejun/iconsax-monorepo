
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const CourthouseBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M2 22H22" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12 2C13.6 2.64 15.4 2.64 17 2V5C15.4 5.64 13.6 5.64 12 5V2Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12 5V8" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M4 15.91V22H20V11C20 9 19 8 17 8H7C5 8 4 9 4 11V12" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M4 12H19.42" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M7.99023 12V22" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" />
<path d="M11.9902 12V22" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" />
<path d="M15.9902 12V22" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default CourthouseBrokenIcon;
      