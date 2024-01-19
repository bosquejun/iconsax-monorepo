
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const GpsSlashBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M9 18.88C9.92 19.28 10.93 19.5 12 19.5C16.14 19.5 19.5 16.14 19.5 12C19.5 10.93 19.28 9.92 18.88 9" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M4.77 10.01C4.59 10.64 4.5 11.31 4.5 12C4.5 14.01 5.29 15.84 6.58 17.19" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M17.21 6.6C15.86 5.3 14.02 4.5 12 4.5C10.08 4.5 8.33 5.22 7 6.41" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12 4V2" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M4 12H2" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12 20V22" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M20 12H22" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M14.12 9.88L9.88 14.12C9.34 13.58 9 12.83 9 12C9 10.34 10.34 9 12 9C12.83 9 13.58 9.34 14.12 9.88Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M22 2L2 22" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default GpsSlashBrokenIcon;
      