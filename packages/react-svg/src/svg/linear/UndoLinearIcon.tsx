
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const UndoLinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M7.12988 18.3101H15.1299C17.8899 18.3101 20.1299 16.0701 20.1299 13.3101C20.1299 10.5501 17.8899 8.31006 15.1299 8.31006H4.12988" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M6.43012 10.8099L3.87012 8.24994L6.43012 5.68994" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default UndoLinearIcon;
      