
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const SignpostLinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M17.22 2H8.96005C8.56005 2 8.18002 2.14 7.87002 2.38L5.68002 4.13C4.80002 4.83 4.80002 6.15999 5.68002 6.85999L7.87002 8.60999C8.18002 8.85999 8.57005 8.98999 8.96005 8.98999H17.22C18.19 8.98999 18.97 8.20999 18.97 7.23999V3.73999C18.97 2.77999 18.19 2 17.22 2Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M6.79999 12H15.06C15.46 12 15.84 12.14 16.15 12.38L18.34 14.13C19.22 14.83 19.22 16.16 18.34 16.86L16.15 18.61C15.84 18.86 15.45 18.99 15.06 18.99H6.79999C5.82999 18.99 5.04999 18.21 5.04999 17.24V13.74C5.04999 12.78 5.82999 12 6.79999 12Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12 12V9" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12 22V19" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M9 22H15" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default SignpostLinearIcon;
      