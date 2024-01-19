
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MenuLinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M3 7H21" stroke={color} stroke-width="1.5" stroke-linecap="round" />
<path d="M3 12H21" stroke={color} stroke-width="1.5" stroke-linecap="round" />
<path d="M3 17H21" stroke={color} stroke-width="1.5" stroke-linecap="round" />
        </svg>
      )
    }
    
    
    export default MenuLinearIcon;
      