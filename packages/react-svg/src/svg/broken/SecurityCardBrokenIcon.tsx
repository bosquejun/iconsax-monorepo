
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const SecurityCardBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M2.00023 7.14012C2.00023 5.92012 2.93024 4.57012 4.07024 4.14012L9.05023 2.2701C9.87023 1.9601 11.2302 1.9601 12.0502 2.2701L17.0202 4.14012C17.9702 4.50012 18.7802 5.5001 19.0302 6.5201H11.7302C11.5102 6.5201 11.3102 6.53011 11.1202 6.53011C9.27022 6.64011 8.79022 7.31012 8.79022 9.42012V14.8501C8.79022 17.1601 9.38022 17.7501 11.7302 17.7501H17.6502C17.5602 17.8301 17.4702 17.9001 17.3802 17.9801L13.1102 21.1801C11.7002 22.2301 9.40022 22.2301 7.98022 21.1801L3.70023 17.9801C2.76023 17.2801 1.99023 15.7301 1.99023 14.5601V11.2401" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M8.80078 11.2202H22.0008" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M22.0008 9.42026V14.9702C21.9808 17.1902 21.3708 17.7402 19.0608 17.7402H11.7408C9.39078 17.7402 8.80078 17.1502 8.80078 14.8402V9.41025C8.80078 7.31025 9.28078 6.64023 11.1308 6.52023C11.3208 6.52023 11.5208 6.51025 11.7408 6.51025H19.0608C21.4108 6.52025 22.0008 7.10026 22.0008 9.42026Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M11.3203 15.2603H12.6503" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M14.75 15.2603H18.02" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default SecurityCardBrokenIcon;
      