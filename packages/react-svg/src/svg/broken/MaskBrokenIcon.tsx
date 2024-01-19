
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MaskBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M2 12C2 14.76 3.11999 17.26 4.92999 19.07L19.07 4.93C17.26 3.12 14.76 2 12 2C8.07 2 4.67003 4.27 3.03003 7.57" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M21.9997 11.9999C21.9997 17.5199 17.5197 21.9999 11.9997 21.9999C9.23969 21.9999 6.73969 20.8799 4.92969 19.0699L19.0697 4.92993C20.8797 6.73993 21.9997 9.23993 21.9997 11.9999Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M7.75977 16.24L13.4097 21.9" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M11.2891 12.71L17.8691 19.28" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M14.8301 9.16992L21.1201 15.4699" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default MaskBrokenIcon;
      