
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ColorSwatchLinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M10 4.5V18C10 19.08 9.55999 20.07 8.85999 20.79L8.82001 20.83C8.73001 20.92 8.63001 21.01 8.54001 21.08C8.24001 21.34 7.89999 21.54 7.54999 21.68C7.43999 21.73 7.33 21.77 7.22 21.81C6.83 21.94 6.41 22 6 22C5.73 22 5.46001 21.97 5.20001 21.92C5.07001 21.89 4.94 21.86 4.81 21.82C4.65 21.77 4.50001 21.72 4.35001 21.65C4.35001 21.64 4.35 21.64 4.34 21.65C4.06 21.51 3.79001 21.35 3.54001 21.16L3.53 21.15C3.4 21.05 3.28001 20.95 3.17001 20.83C3.06001 20.71 2.95 20.59 2.84 20.46C2.65 20.21 2.49001 19.94 2.35001 19.66C2.36001 19.65 2.36001 19.65 2.35001 19.65C2.35001 19.65 2.35 19.64 2.34 19.63C2.28 19.49 2.22999 19.34 2.17999 19.19C2.13999 19.06 2.10999 18.93 2.07999 18.8C2.02999 18.54 2 18.27 2 18V4.5C2 3 3 2 4.5 2H7.5C9 2 10 3 10 4.5Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M22 16.5V19.5C22 21 21 22 19.5 22H6C6.41 22 6.83 21.94 7.22 21.81C7.33 21.77 7.43999 21.73 7.54999 21.68C7.89999 21.54 8.24001 21.34 8.54001 21.08C8.63001 21.01 8.73001 20.92 8.82001 20.83L8.85999 20.79L15.66 14H19.5C21 14 22 15 22 16.5Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M4.81 21.8199C4.21 21.6399 3.64001 21.3099 3.17001 20.8299C2.69001 20.3599 2.35999 19.7899 2.17999 19.1899C2.56999 20.4399 3.56 21.4299 4.81 21.8199Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M18.37 11.2899L15.66 14L8.85999 20.7899C9.55999 20.0699 10 19.08 10 18V8.33995L12.71 5.62996C13.77 4.56996 15.19 4.56996 16.25 5.62996L18.37 7.74996C19.43 8.80996 19.43 10.2299 18.37 11.2899Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M6 19C6.55228 19 7 18.5523 7 18C7 17.4477 6.55228 17 6 17C5.44772 17 5 17.4477 5 18C5 18.5523 5.44772 19 6 19Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default ColorSwatchLinearIcon;
      