
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const GridEditTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M22 11V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H10" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M18.7304 14.6701L14.5804 18.82C14.4204 18.98 14.2704 19.29 14.2304 19.51L14.0004 21.1C13.9204 21.67 14.3204 22.08 14.8904 21.99L16.4804 21.76C16.7004 21.73 17.0104 21.5701 17.1704 21.4101L21.3204 17.26C22.0304 16.55 22.3704 15.7101 21.3204 14.6601C20.2804 13.6201 19.4504 13.9501 18.7304 14.6701Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M18.1406 15.2598C18.4906 16.5198 19.4806 17.4997 20.7406 17.8597" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default GridEditTwotoneIcon;
      