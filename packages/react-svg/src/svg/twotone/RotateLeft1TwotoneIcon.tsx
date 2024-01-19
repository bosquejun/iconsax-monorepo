
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const RotateLeft1TwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M7.25 22H11.75C15.5 22 17 20.5 17 16.75V12.25C17 8.5 15.5 7 11.75 7H7.25C3.5 7 2 8.5 2 12.25V16.75C2 20.5 3.5 22 7.25 22Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M22 9C22 5.13 18.87 2 15 2L16.05 3.75" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default RotateLeft1TwotoneIcon;
      