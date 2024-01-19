
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const FlagBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M18.0204 12.33L16.8004 11.11C16.5104 10.86 16.3404 10.49 16.3304 10.08C16.3104 9.63 16.4904 9.18 16.8204 8.85L18.0204 7.65C19.0604 6.61 19.4504 5.61 19.1204 4.82C18.8004 4.04 17.8104 3.61 16.3504 3.61H5.90039V2.75C5.90039 2.34 5.56039 2 5.15039 2C4.74039 2 4.40039 2.34 4.40039 2.75V21.25C4.40039 21.66 4.74039 22 5.15039 22C5.56039 22 5.90039 21.66 5.90039 21.25V16.37H16.3504C17.7904 16.37 18.7604 15.93 19.0904 15.14C19.4204 14.35 19.0404 13.36 18.0204 12.33Z" fill={color} />
        </svg>
      )
    }
    
    
    export default FlagBoldIcon;
      