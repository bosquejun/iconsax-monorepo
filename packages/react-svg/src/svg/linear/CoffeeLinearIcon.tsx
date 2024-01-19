
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const CoffeeLinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M17.79 10.47V17.79C17.79 20.12 15.9 22 13.58 22H6.21C3.89 22 2 20.11 2 17.79V10.47C2 8.14001 3.89 6.26001 6.21 6.26001H13.58C15.9 6.26001 17.79 8.15001 17.79 10.47Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M5.5 4V2.25" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M9.5 4V2.25" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M13.5 4V2.25" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M22 13.16C22 15.48 20.11 17.37 17.79 17.37V8.94995C20.11 8.94995 22 10.83 22 13.16Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2 12H17.51" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default CoffeeLinearIcon;
      