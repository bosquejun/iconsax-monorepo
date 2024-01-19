
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const BitcoinRefreshTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M4.47 11.4202L2.73 9.68018L1 11.4202" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M19.5293 12.5801L21.2693 14.3201L23.0093 12.5801" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M21.2595 14.3203V12.0002C21.2595 6.88024 17.1095 2.74023 11.9995 2.74023C9.07953 2.74023 6.46953 4.10027 4.76953 6.21027" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2.74023 9.68018V12.0002C2.74023 17.1202 6.89024 21.2602 12.0002 21.2602C14.9202 21.2602 17.5302 19.9002 19.2302 17.7902" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default BitcoinRefreshTwotoneIcon;
      