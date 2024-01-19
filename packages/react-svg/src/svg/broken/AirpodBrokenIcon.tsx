
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const AirpodBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M2.61914 10.97V8.25C2.61914 7.48 2.64914 6.79 2.72914 6.18C3.09914 2.89 4.64914 2 8.87914 2H15.1291C19.3491 2 20.9091 2.89 21.2691 6.18C21.3591 6.79 21.3791 7.48 21.3791 8.25V15.75C21.3791 16.52 21.3491 17.21 21.2691 17.83C20.8991 21.11 19.3491 22 15.1191 22H8.87914C4.65914 22 3.09914 21.11 2.73914 17.83C2.64914 17.21 2.61914 16.52 2.61914 15.75V15.01" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M21.2309 8.91992H17.1309" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M6.86953 8.91992H2.76953" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M17.1291 8.92012C17.1291 10.0501 16.2091 10.9701 15.0791 10.9701H8.91914C8.35914 10.9701 7.83914 10.7401 7.46914 10.3601C7.09914 10.0001 6.86914 9.49012 6.86914 8.92012C6.86914 7.79012 7.78914 6.87012 8.91914 6.87012H15.0691C15.6291 6.87012 16.1491 7.10012 16.5191 7.48012C16.8991 7.85012 17.1291 8.36012 17.1291 8.92012Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default AirpodBrokenIcon;
      