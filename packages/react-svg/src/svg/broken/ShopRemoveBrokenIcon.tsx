
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ShopRemoveBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M20.2105 19.6699C19.2905 21.2899 17.5405 21.9999 14.7205 21.9999H9.33051C8.75051 21.9999 8.22047 21.9699 7.73047 21.8999" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M21.0098 11.22V15.71" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M3.03906 15.52V11.22" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12.0299 12C13.8599 12 15.2099 10.5101 15.0299 8.68005L14.3599 2H9.68989L9.01991 8.68005C8.83991 10.5101 10.1999 12 12.0299 12Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M18.3303 12C20.3503 12 21.8303 10.36 21.6303 8.34998L21.3503 5.59998C20.9903 2.99998 19.9903 2 17.3703 2H14.3203L15.0203 9.01001C15.2003 10.66 16.6803 12 18.3303 12Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2.63993 5.59998L2.3599 8.34998C2.1599 10.36 3.63989 12 5.65989 12C7.30989 12 8.79994 10.66 8.95994 9.01001L9.17991 6.80005L9.65989 2H6.6099C5.6999 2 4.9799 2.12001 4.4199 2.39001" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M9 19C9 19.75 8.78998 20.4601 8.41998 21.0601C8.22998 21.3801 7.99998 21.67 7.72998 21.9C7.69998 21.94 7.67 21.97 7.63 22C6.93 22.63 6.01 23 5 23C3.78 23 2.68997 22.45 1.96997 21.59C1.94997 21.56 1.92002 21.54 1.90002 21.51C1.78002 21.37 1.67002 21.2201 1.58002 21.0601C1.21002 20.4601 1 19.75 1 19C1 17.74 1.58 16.61 2.5 15.88C2.67 15.74 2.84998 15.62 3.03998 15.52C3.61998 15.19 4.29 15 5 15C6 15 6.89998 15.36 7.59998 15.97C7.71998 16.06 7.82999 16.17 7.92999 16.28C8.58999 17 9 17.95 9 19Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M6.48975 18.98H3.50977" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default ShopRemoveBrokenIcon;
      