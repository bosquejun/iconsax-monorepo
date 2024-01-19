
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const BitcoinRefreshBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M4.47 11.4199L2.73 9.67993L1 11.4199" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M19.5293 12.5801L21.2693 14.3201L23.0093 12.5801" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M11.9995 2.73999C9.07953 2.73999 6.46953 4.10002 4.76953 6.21002" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M21.26 14.3201V12.0001C21.26 8.32012 19.11 5.14014 16 3.64014" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12 21.2601C14.92 21.2601 17.53 19.9 19.23 17.79" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2.74023 9.67993V11.9999C2.74023 15.6499 4.85024 18.8099 7.93024 20.3199" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M9 8.5H13.38C14.35 8.5 15.13 9.38 15.13 10.25C15.13 11.22 14.35 12 13.38 12H9V8.5Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M9 12H14C15.1 12 16 12.78 16 13.75C16 14.72 15.1 15.5 14 15.5H9V12Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M11.8008 15.5V17.25" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M11.8008 6.75V8.5" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default BitcoinRefreshBrokenIcon;
      