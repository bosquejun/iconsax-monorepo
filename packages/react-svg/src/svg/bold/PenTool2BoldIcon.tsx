
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const PenTool2BoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M20.9795 10.7C20.7595 6.8 17.8695 3.55 14.0095 2.89C13.9495 2.12 13.3095 1.5 12.5195 1.5H11.5195C10.7295 1.5 10.0995 2.11 10.0295 2.88C6.14953 3.52 3.23953 6.78 3.01953 10.7C2.30953 10.82 1.76953 11.43 1.76953 12.17V13.17C1.76953 14 2.43953 14.67 3.26953 14.67H4.26953C5.09953 14.67 5.76953 14 5.76953 13.17V12.17C5.76953 11.43 5.22953 10.82 4.51953 10.7C4.72953 7.58 7.01953 4.99 10.0795 4.39C10.2495 5.03 10.8295 5.5 11.5195 5.5H12.5195C13.2095 5.5 13.7795 5.03 13.9595 4.4C16.9995 5.01 19.2695 7.6 19.4795 10.7C18.7695 10.82 18.2295 11.43 18.2295 12.17V13.17C18.2295 14 18.8995 14.67 19.7295 14.67H20.7295C21.5595 14.67 22.2295 14 22.2295 13.17V12.17C22.2295 11.43 21.6895 10.81 20.9795 10.7Z" fill={color} />
<path d="M15.7703 16.5492L14.1303 17.9992H9.88032L8.24032 16.5492C7.29032 15.7692 7.29032 15.1692 8.01032 14.2492L10.9003 10.5892C11.1003 10.3392 11.3303 10.1692 11.5903 10.0792C11.8603 9.98922 12.1503 9.98922 12.4303 10.0792C12.6803 10.1692 12.9103 10.3392 13.1203 10.5892L16.0003 14.2392C16.7303 15.1592 16.6903 15.7292 15.7703 16.5492Z" fill={color} />
<path d="M13.3202 21.9998H10.7302C9.81017 21.9998 9.12017 21.2498 9.30017 20.4498L9.61017 19.0598C9.67017 18.7798 9.92017 18.5898 10.2002 18.5898H13.8502C14.1302 18.5898 14.3702 18.7798 14.4402 19.0598L14.7502 20.4498C14.9402 21.2998 14.3002 21.9998 13.3202 21.9998Z" fill={color} />
        </svg>
      )
    }
    
    
    export default PenTool2BoldIcon;
      