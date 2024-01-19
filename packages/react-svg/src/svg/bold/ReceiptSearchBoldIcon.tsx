
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ReceiptSearchBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3C3.5 20.96 4.96 21.59 6.73 19.69L6.74 19.68C7.56 18.81 8.81 18.88 9.52 19.83L10.53 21.18C11.34 22.25 12.65 22.25 13.46 21.18L14.47 19.83C15.19 18.87 16.44 18.8 17.26 19.68C19.04 21.58 20.49 20.95 20.49 18.29V7.04C20.5 3.01 19.56 2 15.78 2ZM15.66 14.53C15.51 14.68 15.32 14.75 15.13 14.75C14.94 14.75 14.75 14.68 14.6 14.53L13.86 13.79C13.28 14.17 12.58 14.4 11.83 14.4C9.79 14.4 8.13 12.74 8.13 10.7C8.13 8.66 9.78 7 11.83 7C13.88 7 15.53 8.66 15.53 10.7C15.53 11.45 15.3 12.15 14.92 12.73L15.66 13.47C15.95 13.76 15.95 14.24 15.66 14.53Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ReceiptSearchBoldIcon;
      