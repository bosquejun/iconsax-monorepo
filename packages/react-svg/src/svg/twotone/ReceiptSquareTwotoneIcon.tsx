
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ReceiptSquareTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M8.90024 16.5299C9.38024 16.0099 10.1203 16.0499 10.5403 16.6199L11.1403 17.4199C11.6103 18.0499 12.3902 18.0499 12.8602 17.4199L13.4503 16.6299C13.8703 16.0699 14.6102 16.0299 15.0902 16.5399C16.1402 17.6599 16.9902 17.2899 16.9902 15.7199V9.08987C16.9902 6.71987 16.4302 6.12988 14.2102 6.12988H9.77023C7.55023 6.12988 6.99023 6.71987 6.99023 9.08987V15.7199C7.00023 17.2699 7.86024 17.6399 8.90024 16.5299Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default ReceiptSquareTwotoneIcon;
      