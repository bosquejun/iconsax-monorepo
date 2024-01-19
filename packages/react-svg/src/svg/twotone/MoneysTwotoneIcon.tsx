
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MoneysTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M19.3009 7.91998V13.07C19.3009 16.15 17.5409 17.47 14.9009 17.47H6.11093C5.66093 17.47 5.23093 17.43 4.83093 17.34C4.58093 17.3 4.34094 17.23 4.12094 17.15C2.62094 16.59 1.71094 15.29 1.71094 13.07V7.91998C1.71094 4.83998 3.47093 3.52002 6.11093 3.52002H14.9009C17.1409 3.52002 18.7509 4.47001 19.1809 6.64001C19.2509 7.04001 19.3009 7.44998 19.3009 7.91998Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M22.3001 10.9201V16.0701C22.3001 19.1501 20.5401 20.4701 17.9001 20.4701H9.11008C8.37008 20.4701 7.70009 20.3701 7.12009 20.1501C5.93009 19.7101 5.12008 18.8001 4.83008 17.3401C5.23008 17.4301 5.66008 17.4701 6.11008 17.4701H14.9001C17.5401 17.4701 19.3001 16.1501 19.3001 13.0701V7.9201C19.3001 7.4501 19.2601 7.03014 19.1801 6.64014C21.0801 7.04014 22.3001 8.38011 22.3001 10.9201Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M10.4994 13.1399C11.9574 13.1399 13.1394 11.9579 13.1394 10.4999C13.1394 9.04185 11.9574 7.85986 10.4994 7.85986C9.04136 7.85986 7.85938 9.04185 7.85938 10.4999C7.85938 11.9579 9.04136 13.1399 10.4994 13.1399Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M4.7793 8.2998V12.6998" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M16.2207 8.2998V12.6998" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default MoneysTwotoneIcon;
      