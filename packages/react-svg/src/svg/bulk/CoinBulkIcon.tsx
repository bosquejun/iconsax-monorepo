
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const CoinBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M18.5 12.6499V16.3499C18.5 19.4699 15.59 21.9999 12 21.9999C8.41 21.9999 5.5 19.4699 5.5 16.3499V12.6499C5.5 15.7699 8.41 17.9999 12 17.9999C15.59 17.9999 18.5 15.7699 18.5 12.6499Z" fill={color} />
<path opacity="0.4" d="M18.5 7.6499V12.6499C18.5 15.7699 15.59 17.9999 12 17.9999C8.41 17.9999 5.5 15.7699 5.5 12.6499V7.6499C5.5 8.5599 5.75 9.3999 6.19 10.1199C7.26 11.8799 9.46 12.9999 12 12.9999C14.54 12.9999 16.74 11.8799 17.81 10.1199C18.25 9.3999 18.5 8.5599 18.5 7.6499Z" fill={color} />
<path d="M18.5 7.65C18.5 8.56 18.25 9.4 17.81 10.12C16.74 11.88 14.54 13 12 13C9.46 13 7.26 11.88 6.19 10.12C5.75 9.4 5.5 8.56 5.5 7.65C5.5 4.53 8.41 2 12 2C13.8 2 15.42 2.63 16.6 3.65C17.77 4.68 18.5 6.09 18.5 7.65Z" fill={color} />
        </svg>
      )
    }
    
    
    export default CoinBulkIcon;
      