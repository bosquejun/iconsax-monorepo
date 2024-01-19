
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const DocumentSketchBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M10.2895 17.7C9.93952 18.05 9.35952 18.05 9.00952 17.7L6.54952 15.24C6.25952 14.95 6.20952 14.44 6.43952 14.1L7.56952 12.4C7.71952 12.18 8.05952 12 8.31952 12H10.9695C11.2395 12 11.5795 12.18 11.7195 12.4L12.8495 14.1C13.0795 14.44 13.0295 14.95 12.7395 15.24" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2 9C2 4 4 2 9 2H14" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V12.98" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M18 10C15 10 14 9 14 6V2L22 10" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default DocumentSketchBrokenIcon;
      