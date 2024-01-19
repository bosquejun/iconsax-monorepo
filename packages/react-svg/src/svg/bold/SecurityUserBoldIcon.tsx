
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const SecurityUserBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M18.5002 4.11031L13.5102 2.24031C12.6802 1.93031 11.3202 1.93031 10.4902 2.24031L5.50016 4.11031C4.35016 4.54031 3.41016 5.90031 3.41016 7.12031V14.5503C3.41016 15.7303 4.19016 17.2803 5.14016 17.9903L9.44016 21.2003C10.8502 22.2603 13.1702 22.2603 14.5802 21.2003L18.8802 17.9903C19.8302 17.2803 20.6102 15.7303 20.6102 14.5503V7.12031C20.5902 5.90031 19.6502 4.54031 18.5002 4.11031ZM11.9302 7.03031C13.1102 7.03031 14.0702 7.99031 14.0702 9.17031C14.0702 10.3303 13.1602 11.2603 12.0102 11.3003H11.9902H11.9702C11.9502 11.3003 11.9302 11.3003 11.9102 11.3003C10.7102 11.2603 9.81016 10.3303 9.81016 9.17031C9.80016 7.99031 10.7602 7.03031 11.9302 7.03031ZM14.1902 16.3603C13.5802 16.7603 12.7902 16.9703 12.0002 16.9703C11.2102 16.9703 10.4102 16.7703 9.81016 16.3603C9.24016 15.9803 8.93016 15.4603 8.92016 14.8903C8.92016 14.3303 9.24016 13.7903 9.81016 13.4103C11.0202 12.6103 12.9902 12.6103 14.2002 13.4103C14.7702 13.7903 15.0902 14.3103 15.0902 14.8803C15.0802 15.4403 14.7602 15.9803 14.1902 16.3603Z" fill={color} />
        </svg>
      )
    }
    
    
    export default SecurityUserBoldIcon;
      