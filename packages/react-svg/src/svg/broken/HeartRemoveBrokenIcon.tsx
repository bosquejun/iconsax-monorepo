
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const HeartRemoveBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M22.0004 17.2C22.0004 19.85 19.8504 22 17.2004 22C15.7804 22 14.5104 21.38 13.6304 20.4C12.8704 19.55 12.4004 18.43 12.4004 17.2C12.4004 14.55 14.5504 12.4 17.2004 12.4C18.5704 12.4 19.8104 12.98 20.6904 13.91C20.6804 13.91 20.6804 13.91 20.6904 13.92C21.5004 14.78 22.0004 15.93 22.0004 17.2Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M18.4792 18.54L15.9492 16" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M18.45 16.03L15.9199 18.57" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M7.56 3.09998C9.37 3.09998 10.99 3.98002 12 5.33002C13.01 3.98002 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.6 22 8.69C22 10.66 21.49 12.4 20.69 13.91C19.81 12.98 18.57 12.4 17.2 12.4C14.55 12.4 12.4 14.55 12.4 17.2C12.4 18.43 12.87 19.55 13.63 20.4C13.26 20.57 12.92 20.71 12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.69C2 7.14 2.62 5.73998 3.63 4.72998" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default HeartRemoveBrokenIcon;
      