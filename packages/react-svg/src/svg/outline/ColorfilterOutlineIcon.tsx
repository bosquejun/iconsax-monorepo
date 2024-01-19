
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ColorfilterOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M8 22.7499C4.28 22.7499 1.25 19.7199 1.25 15.9999C1.25 12.9599 3.29 10.2799 6.22 9.48989C6.59 9.38989 6.97 9.57989 7.11 9.93989C7.72 11.4699 9.02 12.6399 10.61 13.0699C11.49 13.3099 12.51 13.3099 13.37 13.0699C13.74 12.9699 14.13 13.1599 14.27 13.5199C14.58 14.3099 14.74 15.1499 14.74 16.0099C14.74 17.9299 13.92 19.7599 12.49 21.0299C11.27 22.1299 9.67 22.7499 8 22.7499ZM6.02 11.1299C4.07 11.9299 2.75 13.8499 2.75 15.9999C2.75 18.8899 5.11 21.2499 8 21.2499C9.3 21.2499 10.54 20.7699 11.5 19.8999C12.62 18.9099 13.25 17.4899 13.25 15.9999C13.25 15.5399 13.19 15.0999 13.08 14.6699C12.14 14.8199 11.12 14.7699 10.22 14.5199C8.41 14.0199 6.89 12.7799 6.02 11.1299Z" fill={color} />
<path d="M12 14.75C11.38 14.75 10.78 14.67 10.22 14.51C8.19 13.95 6.5 12.45 5.72 10.48C5.41 9.7 5.25 8.86 5.25 8C5.25 4.28 8.28 1.25 12 1.25C15.72 1.25 18.75 4.28 18.75 8C18.75 8.86 18.59 9.7 18.28 10.49C17.5 12.45 15.82 13.96 13.78 14.52C13.22 14.67 12.62 14.75 12 14.75ZM12 2.75C9.11 2.75 6.75 5.11 6.75 8C6.75 8.67 6.87 9.32 7.12 9.93C7.73 11.46 9.03 12.63 10.62 13.06C11.5 13.3 12.52 13.3 13.38 13.06C14.97 12.63 16.28 11.45 16.88 9.93C17.12 9.32 17.25 8.67 17.25 8C17.25 5.11 14.89 2.75 12 2.75Z" fill={color} />
<path d="M16 22.7502C14.33 22.7502 12.73 22.1302 11.5 21.0202C11.34 20.8802 11.25 20.6702 11.25 20.4602C11.25 20.2502 11.34 20.0402 11.5 19.9002C12.61 18.9202 13.25 17.5002 13.25 16.0002C13.25 15.3302 13.13 14.6802 12.88 14.0702C12.8 13.8702 12.81 13.6502 12.91 13.4602C13.01 13.2702 13.18 13.1302 13.38 13.0702C14.97 12.6402 16.27 11.4702 16.88 9.94022C17.02 9.58022 17.41 9.40022 17.77 9.49022C20.7 10.2902 22.74 12.9602 22.74 16.0002C22.75 19.7202 19.72 22.7502 16 22.7502ZM13.12 20.3902C13.97 20.9502 14.96 21.2502 16 21.2502C18.89 21.2502 21.25 18.8902 21.25 16.0002C21.25 13.8502 19.93 11.9302 17.98 11.1302C17.24 12.5402 16 13.6602 14.52 14.2602C14.67 14.8202 14.75 15.4102 14.75 16.0002C14.75 17.6202 14.17 19.1802 13.12 20.3902Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ColorfilterOutlineIcon;
      