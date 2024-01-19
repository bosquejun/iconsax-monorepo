
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Radar1BrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M20 18C21.26 16.33 22 14.25 22 12C22 9.75 21.26 7.67 20 6" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M4 18C2.74 16.33 2 14.25 2 12C2 11.79 2.00999 11.58 2.01999 11.38" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M4 6C3.62 6.51 3.28 7.06001 3 7.64001" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M16.8008 15.6C17.5508 14.6 18.0008 13.35 18.0008 12C18.0008 10.65 17.5508 9.40002 16.8008 8.40002" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M7.20001 8.40002C6.45001 9.40002 6 10.65 6 12C6 13.35 6.45001 14.6 7.20001 15.6" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default Radar1BrokenIcon;
      