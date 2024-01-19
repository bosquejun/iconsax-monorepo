
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const DiamondsTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M16.2904 2.1499H7.70044C6.00044 2.1499 5.25044 2.9999 4.79044 4.0399L2.23044 9.7999C1.77044 10.8399 2.02044 12.3899 2.79044 13.2299L9.65044 20.7699C10.9504 22.1899 13.0704 22.1899 14.3604 20.7699L21.2105 13.2199C21.9805 12.3699 22.2304 10.8299 21.7604 9.7899L19.2004 4.0299C18.7404 2.9999 17.9904 2.1499 16.2904 2.1499Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M3.5 8H20.5" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default DiamondsTwotoneIcon;
      