
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const TicketStarBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M3.23977 15.27C2.85977 15.41 2.43977 15.49 2.00977 15.49C2.09977 19.08 3.16977 20 6.99977 20H16.9998C20.9998 20 21.9998 19 21.9998 15V9C21.9998 5 20.9998 4 16.9998 4H6.99977C3.16977 4 2.09977 4.92 2.00977 8.5C3.93977 8.5 5.49977 10.07 5.49977 12" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M9 4V7.5" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M9 16.5V20" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M14.8599 14.2099C14.7399 14.1499 14.5899 14.1499 14.4699 14.2099L13.2399 14.8599C12.9299 15.0199 12.5799 14.7599 12.6399 14.4199L12.8799 13.0499C12.8999 12.9099 12.8599 12.7799 12.7599 12.6799L11.7699 11.7099C11.5199 11.4699 11.6599 11.0499 11.9999 10.9999L13.3799 10.7999C13.5199 10.7799 13.6299 10.6999 13.6899 10.5699L14.2999 9.3199C14.4499 9.0099 14.8899 9.0099 15.0399 9.3199L15.6599 10.5699C15.7199 10.6899 15.8399 10.7799 15.9699 10.7999L17.3499 10.9999C17.6899 11.0499 17.8299 11.4699 17.5799 11.7099L16.5799 12.6799C16.4799 12.7699 16.4399 12.9099 16.4599 13.0499" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default TicketStarBrokenIcon;
      