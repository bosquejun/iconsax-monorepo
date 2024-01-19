
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const WalletRemoveBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M6.19 7.06C6.45 7.02 6.72 7 7 7H17C17.26 7 17.51 7.00999 17.75 7.04999C20.33 7.34999 22 9.26 22 12V17C22 20 20 22 17 22H7.63C7.94 21.74 8.20998 21.42 8.41998 21.06C8.78998 20.46 9 19.75 9 19C9 16.79 7.21 15 5 15C3.8 15 2.73 15.53 2 16.36V12C2 11.13 2.16998 10.34 2.47998 9.66998" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M17.7495 7.04997C17.5095 7.00997 17.2595 6.99998 16.9995 6.99998H6.99945C6.71945 6.99998 6.44945 7.01998 6.18945 7.05998C6.32945 6.77998 6.52947 6.52001 6.76947 6.28001L10.0195 3.02C11.3895 1.66 13.6094 1.66 14.9794 3.02L16.7294 4.78996C17.3694 5.41996 17.7095 6.21997 17.7495 7.04997Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M22 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H22" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M9 19C9 19.75 8.78998 20.46 8.41998 21.06C8.20998 21.42 7.94 21.74 7.63 22C6.93 22.63 6.01 23 5 23C3.54 23 2.27002 22.22 1.58002 21.06C1.21002 20.46 1 19.75 1 19C1 17.99 1.38 17.07 2 16.36C2.73 15.53 3.8 15 5 15C7.21 15 9 16.79 9 19Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M6.06897 20.0399L3.95898 17.9299" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M6.03967 17.96L3.92969 20.0699" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default WalletRemoveBrokenIcon;
      