
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Glass1TwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M10 17.5H14" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M2 17.5V7.5C2 3.5 3 2.5 7 2.5" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M22 17.5V7.5C22 3.5 21 2.5 17 2.5" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M10 15.9099V19.1999C10 21.1999 9.2 21.9999 7.2 21.9999H4.8C2.8 21.9999 2 21.1999 2 19.1999V15.9099C2 13.9099 2.8 13.1099 4.8 13.1099H7.2C9.2 13.1099 10 13.9099 10 15.9099Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M22 15.9099V19.1999C22 21.1999 21.2 21.9999 19.2 21.9999H16.8C14.8 21.9999 14 21.1999 14 19.1999V15.9099C14 13.9099 14.8 13.1099 16.8 13.1099H19.2C21.2 13.1099 22 13.9099 22 15.9099Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default Glass1TwotoneIcon;
      