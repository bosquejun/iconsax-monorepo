
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const BillLinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M3.67004 2.5V14.47C3.67004 15.45 4.13004 16.38 4.92004 16.97L10.13 20.87C11.24 21.7 12.77 21.7 13.88 20.87L19.09 16.97C19.88 16.38 20.34 15.45 20.34 14.47V2.5H3.67004Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" />
<path d="M2 2.5H22" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
<path d="M8 8H16" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M8 13H16" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default BillLinearIcon;
      