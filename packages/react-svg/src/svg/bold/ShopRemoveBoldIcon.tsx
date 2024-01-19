
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ShopRemoveBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M7.80023 22.1483C5.15023 22.1483 2.99023 19.9983 2.99023 17.3383V14.4983C2.99023 13.8283 3.65023 13.3783 4.28023 13.5983C4.54023 13.6883 4.80023 13.7483 5.07023 13.7883C5.19023 13.8083 5.31023 13.8283 5.43023 13.8283C5.58023 13.8483 5.74023 13.8583 5.89023 13.8583C7.00023 13.8583 8.10023 13.4483 8.97023 12.7383C9.80023 13.4483 10.8702 13.8583 12.0102 13.8583C13.1502 13.8583 14.2102 13.4683 15.0402 12.7483C15.9002 13.4483 16.9802 13.8583 18.0802 13.8583C18.2502 13.8583 18.4302 13.8483 18.5902 13.8283C18.7102 13.8183 18.8102 13.8083 18.9202 13.7883C19.2202 13.7483 19.4902 13.6683 19.7602 13.5783C20.3802 13.3683 21.0302 13.8283 21.0302 14.4783V17.3383C21.0302 19.9883 18.8802 22.1483 16.2202 22.1483H7.80023Z" fill={color} />
<path d="M21.9799 8.59156L21.6999 5.93156C21.2999 3.03156 19.9799 1.85156 17.1699 1.85156H6.81985C3.99985 1.85156 2.68985 3.03156 2.27985 5.96156L2.01985 8.60156C1.91985 9.63156 2.19985 10.6316 2.80985 11.4116C3.53985 12.3616 4.65985 12.9016 5.90985 12.9016C7.11985 12.9016 8.27985 12.2916 9.01985 11.3216C9.66985 12.2916 10.7799 12.9016 12.0199 12.9016C13.2599 12.9016 14.3499 12.3216 15.0099 11.3616C15.7499 12.3116 16.8999 12.9016 18.0899 12.9016C19.3699 12.9016 20.5199 12.3316 21.2399 11.3316C21.8199 10.5616 22.0799 9.59156 21.9799 8.59156ZM13.4999 7.73156H10.4999C10.0899 7.73156 9.74985 7.40156 9.74985 6.98156C9.74985 6.57156 10.0899 6.23156 10.4999 6.23156H13.4999C13.9099 6.23156 14.2499 6.57156 14.2499 6.98156C14.2499 7.40156 13.9099 7.73156 13.4999 7.73156Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ShopRemoveBoldIcon;
      