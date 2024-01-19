
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const RotateLeftLinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M9.11008 5.0799C9.98008 4.8199 10.9401 4.6499 12.0001 4.6499C16.7901 4.6499 20.6701 8.5299 20.6701 13.3199C20.6701 18.1099 16.7901 21.9899 12.0001 21.9899C7.21008 21.9899 3.33008 18.1099 3.33008 13.3199C3.33008 11.5399 3.87008 9.8799 4.79008 8.4999" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M7.87012 5.32L10.7601 2" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M7.87012 5.32007L11.2401 7.78007" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default RotateLeftLinearIcon;
      