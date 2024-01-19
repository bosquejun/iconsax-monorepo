
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const HeartAddBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M7.56 3.09998C9.37 3.09998 10.99 3.98002 12 5.33002C13.01 3.98002 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.6 22 8.69C22 10.66 21.49 12.4 20.69 13.91C19.81 12.98 18.57 12.4 17.2 12.4C14.55 12.4 12.4 14.55 12.4 17.2C12.4 18.43 12.87 19.55 13.63 20.4C13.26 20.57 12.92 20.71 12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.69C2 7.14 2.62 5.73998 3.63 4.72998" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M17.2004 22C19.8513 22 22.0004 19.851 22.0004 17.2C22.0004 14.549 19.8513 12.4 17.2004 12.4C14.5494 12.4 12.4004 14.549 12.4004 17.2C12.4004 19.851 14.5494 22 17.2004 22Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M18.9902 17.26H15.4102" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M17.1992 15.51V19.1" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default HeartAddBrokenIcon;
      