
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const VolumeCrossBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M2 13.9998C2 15.9998 3 16.9998 5 16.9998H6.43C6.8 16.9998 7.17 17.1098 7.49 17.2998L10.41 19.1298C12.93 20.7098 15 19.5598 15 16.5898V7.40979C15 4.42979 12.93 3.28979 10.41 4.86979L7.49 6.69979C7.17 6.88979 6.8 6.99979 6.43 6.99979H5C3 6.99979 2 7.99979 2 9.99979" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M21.9991 13.96L18.0391 10" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M19.89 12.1099L18 13.9999" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M21.9599 10.04L21.4199 10.58" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default VolumeCrossBrokenIcon;
      