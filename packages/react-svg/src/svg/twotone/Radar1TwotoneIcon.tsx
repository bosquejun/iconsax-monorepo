
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Radar1TwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M20 18C21.26 16.33 22 14.25 22 12C22 9.75 21.26 7.67 20 6" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M4 6C2.74 7.67 2 9.75 2 12C2 14.25 2.74 16.33 4 18" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M16.8008 15.5999C17.5508 14.5999 18.0008 13.3499 18.0008 11.9999C18.0008 10.6499 17.5508 9.3999 16.8008 8.3999" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M7.20001 8.3999C6.45001 9.3999 6 10.6499 6 11.9999C6 13.3499 6.45001 14.5999 7.20001 15.5999" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default Radar1TwotoneIcon;
      