
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const CardCoinBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M2 17.0601H12" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M5.68976 22H4.22974C2.44974 22 2.00977 21.56 2.00977 19.8V15.7C2.00977 13.94 2.44974 13.5 4.22974 13.5H9.78973C11.5697 13.5 12.0098 13.94 12.0098 15.7V19.81C12.0098 21.57 11.5697 22.01 9.78973 22.01" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2 9C2 5.13 5.13 2 9 2L7.95001 3.75" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M18.5 11C20.99 11 23 8.99 23 6.5C23 4.01 20.99 2 18.5 2C16.01 2 14 4.01 14 6.5C14 7.09 14.11 7.65 14.32 8.16" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default CardCoinBrokenIcon;
      