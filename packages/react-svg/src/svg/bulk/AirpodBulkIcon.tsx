
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const AirpodBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M21.5 6.5V17.5C21.5 19.99 19.49 22 17 22H7C4.51 22 2.5 19.99 2.5 17.5V6.5C2.5 4.01 4.51 2 7 2H17C19.49 2 21.5 4.01 21.5 6.5Z" fill={color} />
<path d="M21.5 8.17V9.67H17.37C17.06 10.64 16.15 11.34 15.08 11.34H8.92C8.28 11.34 7.65 11.08 7.2 10.62C6.93 10.36 6.74 10.03 6.62 9.67H2.5V8.17H6.63C6.94 7.2 7.85 6.5 8.92 6.5H15.07C15.72 6.5 16.34 6.76 16.79 7.22C17.06 7.49 17.26 7.81 17.37 8.17H21.5Z" fill={color} />
        </svg>
      )
    }
    
    
    export default AirpodBulkIcon;
      