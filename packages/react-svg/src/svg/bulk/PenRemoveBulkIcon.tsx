
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const PenRemoveBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M6.5 2C5.44 2 4.46 2.36999 3.69 2.98999C2.65 3.80999 2 5.08 2 6.5C2 7.34 2.23999 8.14001 2.64999 8.82001C3.18999 9.72001 4.04 10.42 5.06 10.76C5.51 10.92 5.99 11 6.5 11C7.64 11 8.66999 10.58 9.45999 9.88C9.80999 9.58 10.11 9.22001 10.35 8.82001C10.56 8.47001 10.72 8.10001 10.83 7.70001C10.94 7.32001 11 6.91 11 6.5C11 4.01 8.99 2 6.5 2ZM8.16 7.25H4.79999C4.38999 7.25 4.04999 6.91 4.04999 6.5C4.04999 6.09 4.38999 5.75 4.79999 5.75H8.16C8.57 5.75 8.91 6.09 8.91 6.5C8.91 6.91 8.58 7.25 8.16 7.25Z" fill={color} />
<path d="M21.7111 11.3499L18.7011 13.2499L12.6211 7.16993L14.5111 4.15992C15.3911 2.76992 17.1611 2.70995 18.4511 3.99995L21.8611 7.40992C23.0811 8.63992 23.0011 10.5299 21.7111 11.3499Z" fill={color} />
<path opacity="0.4" d="M16.0003 21.2898L6.64035 22.3898C5.99035 22.4698 5.41035 22.3698 4.92035 22.1298C4.40035 21.8698 3.99035 21.4698 3.73035 20.9398C3.49035 20.4498 3.40034 19.8798 3.47034 19.2398L4.51035 10.5298C4.68035 10.6198 4.87034 10.6998 5.06034 10.7598C5.51034 10.9198 5.99034 10.9998 6.50034 10.9998C7.64034 10.9998 8.67033 10.5798 9.46033 9.87982C9.81033 9.57982 10.1103 9.21982 10.3503 8.81982C10.5603 8.46982 10.7203 8.09983 10.8303 7.69983C10.8903 7.49983 10.9303 7.28982 10.9603 7.06982L12.6203 7.1698L18.7003 13.2598L18.9603 17.6798C19.2103 20.1598 18.3503 21.0198 16.0003 21.2898Z" fill={color} />
<path d="M8.78024 18.2798L4.93024 22.1298C4.40024 21.8698 4.00023 21.4698 3.74023 20.9398L7.59024 17.0898C7.93024 16.7598 8.46024 16.7598 8.78024 17.0898C9.11024 17.4198 9.11024 17.9498 8.78024 18.2798Z" fill={color} />
        </svg>
      )
    }
    
    
    export default PenRemoveBulkIcon;
      