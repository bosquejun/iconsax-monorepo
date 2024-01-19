
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const UnlimitedTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M10.1802 9.32019C9.36024 8.19019 8.05025 7.4502 6.54025 7.4502C4.03025 7.4502 1.99023 9.49018 1.99023 12.0002C1.99023 14.5102 4.03025 16.5502 6.54025 16.5502C8.23025 16.5502 9.80026 15.6602 10.6703 14.2102L12.0002 12.0002L13.3203 9.79016C14.1903 8.34016 15.7603 7.4502 17.4503 7.4502C19.9603 7.4502 22.0002 9.49018 22.0002 12.0002C22.0002 14.5102 19.9603 16.5502 17.4503 16.5502C15.9503 16.5502 14.6402 15.8102 13.8102 14.6802" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default UnlimitedTwotoneIcon;
      