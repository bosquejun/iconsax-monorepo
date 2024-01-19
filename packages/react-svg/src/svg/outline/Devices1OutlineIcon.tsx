
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Devices1OutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M17.0095 13.48C16.0095 13.48 15.1895 12.66 15.1895 11.66C15.1895 10.66 16.0095 9.84009 17.0095 9.84009C18.0095 9.84009 18.8294 10.66 18.8294 11.66C18.8294 12.66 18.0095 13.48 17.0095 13.48ZM17.0095 11.3401C16.8295 11.3401 16.6895 11.48 16.6895 11.66C16.6895 11.84 16.8295 11.98 17.0095 11.98C17.1895 11.98 17.3294 11.84 17.3294 11.66C17.3294 11.48 17.1895 11.3401 17.0095 11.3401Z" fill={color} />
<path d="M12.02 16.45H6C2.4 16.45 1.25 15.3 1.25 11.7V6C1.25 2.4 2.4 1.25 6 1.25H16C19.6 1.25 20.75 2.4 20.75 6V7.78998C20.75 7.99998 20.66 8.20998 20.5 8.34998C20.34 8.48998 20.13 8.56003 19.91 8.53003C19.69 8.50003 19.43 8.48999 19.15 8.48999H14.87C13.14 8.48999 12.77 8.86003 12.77 10.59V15.7C12.77 16.11 12.43 16.45 12.02 16.45ZM6 2.75C3.21 2.75 2.75 3.21 2.75 6V11.7C2.75 14.49 3.21 14.95 6 14.95H11.27V10.59C11.27 8.03003 12.31 6.98999 14.87 6.98999H19.15C19.18 6.98999 19.22 6.98999 19.25 6.98999V6C19.25 3.21 18.79 2.75 16 2.75H6Z" fill={color} />
<path d="M9 20.7499C8.59 20.7499 8.25 20.4099 8.25 19.9999V15.7C8.25 15.29 8.59 14.95 9 14.95C9.41 14.95 9.75 15.29 9.75 15.7V19.9999C9.75 20.4099 9.41 20.7499 9 20.7499Z" fill={color} />
<path d="M12 12.6499H2C1.59 12.6499 1.25 12.3099 1.25 11.8999C1.25 11.4899 1.59 11.1499 2 11.1499H12C12.41 11.1499 12.75 11.4899 12.75 11.8999C12.75 12.3099 12.41 12.6499 12 12.6499Z" fill={color} />
<path d="M12.0002 20.75H5.9502C5.5402 20.75 5.2002 20.41 5.2002 20C5.2002 19.59 5.5402 19.25 5.9502 19.25H12.0002C12.4102 19.25 12.7502 19.59 12.7502 20C12.7502 20.41 12.4102 20.75 12.0002 20.75Z" fill={color} />
<path d="M17.0095 13.48C16.0095 13.48 15.1895 12.66 15.1895 11.66C15.1895 10.66 16.0095 9.84009 17.0095 9.84009C18.0095 9.84009 18.8294 10.66 18.8294 11.66C18.8294 12.66 18.0095 13.48 17.0095 13.48ZM17.0095 11.3401C16.8295 11.3401 16.6895 11.48 16.6895 11.66C16.6895 11.84 16.8295 11.98 17.0095 11.98C17.1895 11.98 17.3294 11.84 17.3294 11.66C17.3294 11.48 17.1895 11.3401 17.0095 11.3401Z" fill={color} />
<path d="M19.9995 7.78998C19.7495 7.75998 19.4595 7.73999 19.1495 7.73999H14.8695C12.7295 7.73999 12.0195 8.45003 12.0195 10.59V19.15C12.0195 21.29 12.7295 22 14.8695 22H19.1495C21.2895 22 21.9995 21.29 21.9995 19.15V10.59C21.9995 8.76003 21.4795 7.97998 19.9995 7.78998ZM17.0096 10.59C17.5996 10.59 18.0795 11.07 18.0795 11.66C18.0795 12.25 17.5996 12.73 17.0096 12.73C16.4196 12.73 15.9395 12.25 15.9395 11.66C15.9395 11.07 16.4196 10.59 17.0096 10.59ZM17.0096 19.15C15.8296 19.15 14.8695 18.19 14.8695 17.01C14.8695 16.52 15.0395 16.06 15.3195 15.7C15.7095 15.2 16.3196 14.87 17.0096 14.87C17.5496 14.87 18.0395 15.07 18.4095 15.39C18.8595 15.79 19.1495 16.37 19.1495 17.01C19.1495 18.19 18.1896 19.15 17.0096 19.15Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M17.0101 19.9001C15.4201 19.9001 14.1201 18.6001 14.1201 17.0101C14.1201 16.3701 14.3401 15.7401 14.7301 15.2401C15.2801 14.5301 16.1201 14.1201 17.0101 14.1201C17.7001 14.1201 18.3801 14.3701 18.9001 14.8201C19.5401 15.3901 19.9001 16.1801 19.9001 17.0101C19.9001 18.6001 18.6001 19.9001 17.0101 19.9001ZM17.0101 15.6201C16.5801 15.6201 16.1801 15.8201 15.9101 16.1601C15.7201 16.4001 15.6201 16.7001 15.6201 17.0101C15.6201 17.7801 16.2401 18.4001 17.0101 18.4001C17.7801 18.4001 18.4001 17.7801 18.4001 17.0101C18.4001 16.6101 18.2201 16.2301 17.9101 15.9501C17.6701 15.7401 17.3401 15.6201 17.0101 15.6201Z" fill={color} />
<path d="M17.0095 13.48C16.0095 13.48 15.1895 12.66 15.1895 11.66C15.1895 10.66 16.0095 9.84009 17.0095 9.84009C18.0095 9.84009 18.8294 10.66 18.8294 11.66C18.8294 12.66 18.0095 13.48 17.0095 13.48ZM17.0095 11.3401C16.8295 11.3401 16.6895 11.48 16.6895 11.66C16.6895 11.84 16.8295 11.98 17.0095 11.98C17.1895 11.98 17.3294 11.84 17.3294 11.66C17.3294 11.48 17.1895 11.3401 17.0095 11.3401Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Devices1OutlineIcon;
      