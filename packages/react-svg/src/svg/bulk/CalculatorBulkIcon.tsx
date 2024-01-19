
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const CalculatorBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M8 22H16C18.76 22 21 19.76 21 17V7C21 4.24 18.76 2 16 2H8C5.24 2 3 4.24 3 7V17C3 19.76 5.24 22 8 22Z" fill={color} />
<path d="M14.9991 5.70996H8.99914C7.96914 5.70996 7.11914 6.54996 7.11914 7.58996V8.58996C7.11914 9.61996 7.95914 10.47 8.99914 10.47H14.9991C16.0291 10.47 16.8791 9.62996 16.8791 8.58996V7.58996C16.8791 6.54996 16.0391 5.70996 14.9991 5.70996Z" fill={color} />
<path d="M8.16039 14.9201C8.02039 14.9201 7.89039 14.8901 7.77039 14.8401C7.65039 14.7901 7.54039 14.7201 7.45039 14.6301C7.26039 14.4401 7.15039 14.1901 7.15039 13.9201C7.15039 13.7901 7.18039 13.6601 7.23039 13.5401C7.28039 13.4101 7.35039 13.3101 7.45039 13.2101C7.68039 12.9801 8.03039 12.8701 8.35039 12.9401C8.41039 12.9501 8.48039 12.9701 8.54039 13.0001C8.60039 13.0201 8.66039 13.0501 8.71039 13.0901C8.77039 13.1201 8.82039 13.1701 8.86039 13.2101C8.95039 13.3101 9.03039 13.4101 9.08039 13.5401C9.13039 13.6601 9.15039 13.7901 9.15039 13.9201C9.15039 14.1901 9.05039 14.4401 8.86039 14.6301C8.67039 14.8201 8.42039 14.9201 8.16039 14.9201Z" fill={color} />
<path d="M12.1504 14.9201C11.8904 14.9201 11.6404 14.8201 11.4504 14.6301C11.2604 14.4401 11.1504 14.1901 11.1504 13.9201C11.1504 13.6601 11.2604 13.4001 11.4504 13.2101C11.8204 12.8401 12.4904 12.8401 12.8604 13.2101C12.9504 13.3101 13.0304 13.4101 13.0804 13.5401C13.1304 13.6601 13.1504 13.7901 13.1504 13.9201C13.1504 14.1901 13.0504 14.4401 12.8604 14.6301C12.6704 14.8201 12.4204 14.9201 12.1504 14.9201Z" fill={color} />
<path d="M16.1504 14.9201C15.8904 14.9201 15.6404 14.8201 15.4504 14.6301C15.2604 14.4401 15.1504 14.1901 15.1504 13.9201C15.1504 13.6601 15.2604 13.4001 15.4504 13.2101C15.8204 12.8401 16.4904 12.8401 16.8604 13.2101C17.0504 13.4001 17.1604 13.6601 17.1604 13.9201C17.1604 14.0501 17.1304 14.1801 17.0804 14.3001C17.0304 14.4201 16.9604 14.5301 16.8604 14.6301C16.6704 14.8201 16.4204 14.9201 16.1504 14.9201Z" fill={color} />
<path d="M8.16039 18.92C7.89039 18.92 7.64039 18.82 7.45039 18.63C7.26039 18.44 7.15039 18.19 7.15039 17.92C7.15039 17.66 7.26039 17.4 7.45039 17.21C7.54039 17.12 7.65039 17.05 7.77039 17C8.02039 16.9 8.29039 16.9 8.54039 17C8.60039 17.02 8.66039 17.05 8.71039 17.09C8.77039 17.12 8.82039 17.17 8.86039 17.21C9.05039 17.4 9.16039 17.66 9.16039 17.92C9.16039 18.19 9.05039 18.44 8.86039 18.63C8.67039 18.82 8.42039 18.92 8.16039 18.92Z" fill={color} />
<path d="M12.1504 18.92C11.8904 18.92 11.6404 18.82 11.4504 18.63C11.2604 18.44 11.1504 18.19 11.1504 17.92C11.1504 17.85 11.1604 17.79 11.1704 17.72C11.1904 17.66 11.2104 17.6 11.2304 17.54C11.2604 17.48 11.2904 17.42 11.3204 17.36C11.3604 17.31 11.4004 17.26 11.4504 17.21C11.5404 17.12 11.6504 17.05 11.7704 17C12.1404 16.85 12.5804 16.93 12.8604 17.21C13.0504 17.4 13.1504 17.66 13.1504 17.92C13.1504 18.19 13.0504 18.44 12.8604 18.63C12.7704 18.72 12.6604 18.79 12.5404 18.84C12.4204 18.89 12.2904 18.92 12.1504 18.92Z" fill={color} />
<path d="M16.1502 18.92C16.0202 18.92 15.8902 18.89 15.7702 18.84C15.6502 18.79 15.5402 18.72 15.4502 18.63C15.2602 18.44 15.1602 18.19 15.1602 17.92C15.1602 17.66 15.2602 17.4 15.4502 17.21C15.7202 16.93 16.1702 16.85 16.5402 17C16.6602 17.05 16.7702 17.12 16.8602 17.21C17.0502 17.4 17.1502 17.66 17.1502 17.92C17.1502 18.19 17.0502 18.44 16.8602 18.63C16.6702 18.82 16.4202 18.92 16.1502 18.92Z" fill={color} />
        </svg>
      )
    }
    
    
    export default CalculatorBulkIcon;
      