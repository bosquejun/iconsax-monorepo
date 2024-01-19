
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const GasStationBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M3.5 22V5C3.5 3 4.84 2 6.5 2H14.5C16.16 2 17.5 3 17.5 5V22H3.5Z" fill={color} />
<path d="M19 22.75H2C1.59 22.75 1.25 22.41 1.25 22C1.25 21.59 1.59 21.25 2 21.25H19C19.41 21.25 19.75 21.59 19.75 22C19.75 22.41 19.41 22.75 19 22.75Z" fill={color} />
<path d="M7.89 10H13.12C14.16 10 15.01 9.5 15.01 8.11V6.88C15 5.5 14.15 5 13.11 5H7.88C6.85 5 6 5.5 6 6.89V8.12C6 9.5 6.85 10 7.89 10Z" fill={color} />
<path d="M9.5 13.75H6.5C6.09 13.75 5.75 13.41 5.75 13C5.75 12.59 6.09 12.25 6.5 12.25H9.5C9.91 12.25 10.25 12.59 10.25 13C10.25 13.41 9.91 13.75 9.5 13.75Z" fill={color} />
<path d="M22.75 10V16C22.75 16.41 22.42 16.75 22 16.75L17.5 16.76V15.26L21.25 15.25V10.46L19.66 9.67002C19.29 9.49002 19.14 9.04002 19.33 8.66002C19.51 8.29002 19.97 8.15002 20.34 8.33002L22.34 9.33002C22.59 9.46002 22.75 9.72002 22.75 10Z" fill={color} />
        </svg>
      )
    }
    
    
    export default GasStationBulkIcon;
      