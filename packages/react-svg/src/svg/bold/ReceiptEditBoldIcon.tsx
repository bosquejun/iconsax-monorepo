
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ReceiptEditBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3C3.5 20.96 4.96 21.59 6.73 19.69L6.74 19.68C7.56 18.81 8.81 18.88 9.52 19.83L10.53 21.18C11.34 22.25 12.65 22.25 13.46 21.18L14.47 19.83C15.19 18.87 16.44 18.8 17.26 19.68C19.04 21.58 20.49 20.95 20.49 18.29V7.04C20.5 3.01 19.56 2 15.78 2ZM14.84 9.99L14.34 10.5H14.33L11.3 13.53C11.17 13.66 10.9 13.8 10.71 13.82L9.36 14.02C8.87 14.09 8.53 13.74 8.6 13.26L8.79 11.9C8.82 11.71 8.95 11.45 9.08 11.31L12.12 8.28L12.62 7.77C12.95 7.44 13.32 7.2 13.72 7.2C14.06 7.2 14.43 7.36 14.84 7.77C15.74 8.67 15.45 9.38 14.84 9.99Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ReceiptEditBoldIcon;
      