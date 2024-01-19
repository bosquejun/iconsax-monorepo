
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const RedoLinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M16.8701 18.3101H8.87012C6.11012 18.3101 3.87012 16.0701 3.87012 13.3101C3.87012 10.5501 6.11012 8.31006 8.87012 8.31006H19.8701" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M17.5701 10.8099L20.1301 8.24994L17.5701 5.68994" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default RedoLinearIcon;
      