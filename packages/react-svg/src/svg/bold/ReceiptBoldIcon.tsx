
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ReceiptBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M2 7V21C2 21.83 2.94 22.3 3.6 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.29 22.29C8.68 22.68 9.32 22.68 9.71 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7H6C3 2 2 3.79 2 6V7Z" fill={color} />
<path d="M18.01 2V3.5C18.67 3.5 19.3 3.77 19.76 4.22C20.24 4.71 20.5 5.34 20.5 6V8.42C20.5 9.16 20.17 9.5 19.42 9.5H17.5V4.01C17.5 3.73 17.73 3.5 18.01 3.5V2ZM18.01 2C16.9 2 16 2.9 16 4.01V11H19.42C21 11 22 10 22 8.42V6C22 4.9 21.55 3.9 20.83 3.17C20.1 2.45 19.11 2.01 18.01 2C18.02 2 18.01 2 18.01 2Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ReceiptBoldIcon;
      