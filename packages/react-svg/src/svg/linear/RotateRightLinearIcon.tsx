
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const RotateRightLinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M14.89 5.0799C14.02 4.8199 13.06 4.6499 12 4.6499C7.20996 4.6499 3.32996 8.5299 3.32996 13.3199C3.32996 18.1199 7.20996 21.9999 12 21.9999C16.79 21.9999 20.67 18.1199 20.67 13.3299C20.67 11.5499 20.13 9.8899 19.21 8.5099" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M16.13 5.32L13.24 2" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M16.13 5.32007L12.76 7.78007" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default RotateRightLinearIcon;
      