
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Lamp1BrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M4.5307 9.03993C6.0707 6.56993 8.8107 4.92993 11.9407 4.92993H12.0607C16.8807 4.92993 20.7807 8.82993 20.7807 13.6499V18.5899H3.2207V13.6499" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12 2V4.92999" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M15.6496 18.5901C15.5196 20.5001 13.9296 22.0001 11.9996 22.0001C10.0696 22.0001 8.47961 20.5001 8.34961 18.5901H15.6496Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default Lamp1BrokenIcon;
      