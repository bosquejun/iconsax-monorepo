
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const DiamondsBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M21.2105 13.24L14.3604 20.78C13.0604 22.21 10.9404 22.21 9.64044 20.78L2.79044 13.24C2.02044 12.39 1.77044 10.85 2.23044 9.8L3.03044 8H20.9704L21.7705 9.8C22.2304 10.85 21.9805 12.39 21.2105 13.24Z" fill={color} />
<path opacity="0.4" d="M20.9693 7.9999H3.0293L4.78929 4.0399C5.25929 2.9999 5.99929 2.1499 7.6993 2.1499H16.2993C17.9993 2.1499 18.7393 2.9999 19.2093 4.0399L20.9693 7.9999Z" fill={color} />
        </svg>
      )
    }
    
    
    export default DiamondsBulkIcon;
      