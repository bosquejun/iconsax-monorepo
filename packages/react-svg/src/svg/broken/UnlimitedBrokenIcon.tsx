
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const UnlimitedBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M20.0003 15.77C19.2703 16.26 18.4003 16.5499 17.4603 16.5499C15.9603 16.5499 14.6503 15.8099 13.8203 14.6799" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M10.1802 9.31995C9.36024 8.18995 8.05025 7.44995 6.54025 7.44995C4.03025 7.44995 1.99023 9.48994 1.99023 11.9999C1.99023 14.5099 4.03025 16.5499 6.54025 16.5499C8.23025 16.5499 9.80026 15.66 10.6703 14.21L12.0002 11.9999L13.3203 9.78992C14.1903 8.33992 15.7603 7.44995 17.4503 7.44995C19.9603 7.44995 22.0002 9.48994 22.0002 11.9999" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default UnlimitedBrokenIcon;
      