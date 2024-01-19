
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const NextBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M11.73 7.39006L7.57999 5.00005C5.87999 4.02005 3.75 5.24004 3.75 7.21004V16.78C3.75 18.74 5.87999 19.97 7.57999 18.99L11.73 16.6001L15.88 14.2001C17.58 13.2201 17.58 10.7701 15.88 9.79006" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M20.2402 18.18V17" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M20.2402 14.0001V5.82007" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default NextBrokenIcon;
      