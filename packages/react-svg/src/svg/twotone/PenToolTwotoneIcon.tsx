
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const PenToolTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M11.1501 5.19015L10.3701 4.41012C9.90008 3.94012 9.90008 3.18017 10.3701 2.71017L11.1501 1.93014C11.6201 1.46014 12.3801 1.46014 12.8501 1.93014L13.6301 2.71017C14.1001 3.18017 14.1001 3.94012 13.6301 4.41012L12.8501 5.19015C12.3801 5.66015 11.6201 5.66015 11.1501 5.19015Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M19.45 9.81006H20.55C21.21 9.81006 21.75 10.3501 21.75 11.0101V12.11C21.75 12.77 21.21 13.3101 20.55 13.3101H19.45C18.79 13.3101 18.25 12.77 18.25 12.11V11.0101C18.25 10.3501 18.79 9.81006 19.45 9.81006Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M4.55 9.81006H3.45C2.79 9.81006 2.25 10.3501 2.25 11.0101V12.11C2.25 12.77 2.79 13.3101 3.45 13.3101H4.55C5.21 13.3101 5.75 12.77 5.75 12.11V11.0101C5.75 10.3501 5.21 9.81006 4.55 9.81006Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M18.5402 10.0998L13.2402 4.7998" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M5.46094 10.0998L10.7609 4.7998" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default PenToolTwotoneIcon;
      