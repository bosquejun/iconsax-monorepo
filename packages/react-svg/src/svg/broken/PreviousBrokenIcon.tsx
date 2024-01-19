
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const PreviousBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12.2707 7.39006L16.4207 5.00005C18.1207 4.02005 20.2507 5.24004 20.2507 7.21004V16.78C20.2507 18.74 18.1207 19.97 16.4207 18.99L12.2707 16.6001L8.1207 14.2001C6.4207 13.2201 6.4207 10.7701 8.1207 9.79006" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M3.75977 18.18V17" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M3.75977 14.0001V5.82007" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default PreviousBrokenIcon;
      