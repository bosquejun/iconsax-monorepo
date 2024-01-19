
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ShieldSearchBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M3.41016 11.02V14.56C3.41016 15.74 4.19016 17.29 5.14016 18L9.44016 21.21C10.1402 21.74 11.0702 22 12.0002 22" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M20.5902 10.5501V7.12006C20.5902 5.89006 19.6502 4.53006 18.5002 4.10006L13.5102 2.23006C12.6802 1.92006 11.3202 1.92006 10.4902 2.23006L5.50016 4.11006C4.35016 4.54006 3.41016 5.90006 3.41016 7.12006" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M20 16C20 18.21 18.21 20 16 20C13.79 20 12 18.21 12 16C12 15.27 12.19 14.59 12.53 14.01C13.22 12.81 14.51 12.01 15.99 12.01C16.6 12.01 17.17 12.15 17.69 12.39" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M20.9955 21H21.0045" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default ShieldSearchBrokenIcon;
      