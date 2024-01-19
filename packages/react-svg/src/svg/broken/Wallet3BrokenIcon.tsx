
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Wallet3BrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M13 11.1499H7" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M11.3105 2.8501C13.3505 2.8501 15.0005 4.1201 15.0005 6.1601" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2 10.1501V6.53009C2 4.49009 3.65 2.84009 5.69 2.84009H7.62" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2 10.1499C2 7.9399 3.79 6.1499 6 6.1499H16C18.2 6.1499 20 7.9499 20 10.1499V11.5999H18.92C18.36 11.5999 17.85 11.8199 17.48 12.1999C16.98 12.6799 16.74 13.4199 16.94 14.1799C17.19 15.1099 18.11 15.6999 19.07 15.6999H20V17.1499C20 19.3599 18.21 21.1499 16 21.1499H6C3.79 21.1499 2 19.3599 2 17.1499V14.5199" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M22.0002 12.6201V14.6801C22.0002 15.2401 21.5402 15.7001 20.9702 15.7001H19.0402C17.9602 15.7001 16.9702 14.9101 16.8802 13.8301C16.8202 13.2001 17.0602 12.6101 17.4802 12.2001C17.8502 11.8201 18.3602 11.6001 18.9202 11.6001H20.9702C21.5402 11.6001 22.0002 12.0601 22.0002 12.6201Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default Wallet3BrokenIcon;
      