
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const RedoTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M16.8691 18.3101H8.86914C6.10914 18.3101 3.86914 16.0701 3.86914 13.3101C3.86914 10.5501 6.10914 8.31006 8.86914 8.31006H19.8691" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M17.5703 10.8099L20.1303 8.24994L17.5703 5.68994" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default RedoTwotoneIcon;
      