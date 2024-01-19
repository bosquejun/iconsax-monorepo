
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const CardCoinBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12 15.7V15.81C12 16.09 11.78 16.31 11.5 16.31H2.5C2.22 16.31 2 16.09 2 15.81V15.7C2 13.94 2.44 13.5 4.22 13.5H9.78C11.56 13.5 12 13.94 12 15.7Z" fill={color} />
<path d="M2.5 17.3086C2.22 17.3086 2 17.5286 2 17.8086V18.8086V19.7986C2 21.5586 2.44 21.9986 4.22 21.9986H9.78C11.56 21.9986 12 21.5586 12 19.7986V18.8086V17.8086C12 17.5286 11.78 17.3086 11.5 17.3086H2.5Z" fill={color} />
<path d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2 9C2 5.13 5.13 2 9 2L7.95 3.75" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M18.5 11C20.9853 11 23 8.98528 23 6.5C23 4.01472 20.9853 2 18.5 2C16.0147 2 14 4.01472 14 6.5C14 8.98528 16.0147 11 18.5 11Z" fill={color} />
        </svg>
      )
    }
    
    
    export default CardCoinBoldIcon;
      