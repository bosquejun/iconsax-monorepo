
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const BlendBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M21.9707 12C21.9707 15.31 19.2807 18 15.9707 18C14.4307 18 13.0307 17.42 11.9707 16.46C13.2007 15.37 13.9707 13.77 13.9707 12C13.9707 10.23 13.2007 8.63 11.9707 7.54C13.0307 6.58 14.4307 6 15.9707 6C19.2807 6 21.9707 8.69 21.9707 12Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M3.4407 15.92C2.5307 14.87 1.9707 13.5 1.9707 12C1.9707 8.69 4.6607 6 7.9707 6C9.5107 6 10.9107 6.58 11.9707 7.54C13.2007 8.63 13.9707 10.23 13.9707 12C13.9707 13.77 13.2007 15.37 11.9707 16.46C10.9107 17.42 9.5107 18 7.9707 18" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default BlendBrokenIcon;
      