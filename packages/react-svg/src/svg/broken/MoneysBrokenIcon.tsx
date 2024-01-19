
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MoneysBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M1.69922 7.91998C1.69922 4.83998 3.45921 3.52002 6.09921 3.52002H14.8892C17.1292 3.52002 18.7392 4.47001 19.1692 6.64001C19.2492 7.03001 19.2892 7.44998 19.2892 7.91998V13.07C19.2892 16.15 17.5292 17.47 14.8892 17.47H6.09921C5.64921 17.47 5.21921 17.43 4.81921 17.34C4.56921 17.3 4.32919 17.23 4.10919 17.15C2.60919 16.59 1.69922 15.29 1.69922 13.07V12" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M22.3001 15.0101V16.0701C22.3001 19.1501 20.5401 20.4701 17.9001 20.4701H9.11008C8.37008 20.4701 7.70009 20.3701 7.12009 20.1501C5.93009 19.7101 5.12008 18.8001 4.83008 17.3401C5.23008 17.4301 5.66008 17.4701 6.11008 17.4701H14.9001C17.5401 17.4701 19.3001 16.1501 19.3001 13.0701V7.9201C19.3001 7.4501 19.2601 7.03014 19.1801 6.64014C21.0901 7.03014 22.3001 8.37011 22.3001 10.9201" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M13.1394 10.4999C13.1394 9.03988 11.9594 7.85986 10.4994 7.85986C9.03939 7.85986 7.85938 9.03988 7.85938 10.4999C7.85938 11.9599 9.03939 13.1399 10.4994 13.1399" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M4.7793 8.30005V12.7001" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M16.2188 8.30005V12.7001" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default MoneysBrokenIcon;
      