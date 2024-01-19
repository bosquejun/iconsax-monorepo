
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ArrowUp2OutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M19.9195 15.8001C19.7295 15.8001 19.5395 15.7301 19.3895 15.5801L12.8695 9.06008C12.3895 8.58008 11.6095 8.58008 11.1295 9.06008L4.60953 15.5801C4.31953 15.8701 3.83953 15.8701 3.54953 15.5801C3.25953 15.2901 3.25953 14.8101 3.54953 14.5201L10.0695 8.00008C11.1295 6.94008 12.8595 6.94008 13.9295 8.00008L20.4495 14.5201C20.7395 14.8101 20.7395 15.2901 20.4495 15.5801C20.2995 15.7201 20.1095 15.8001 19.9195 15.8001Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ArrowUp2OutlineIcon;
      