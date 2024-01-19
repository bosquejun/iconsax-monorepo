
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const CpuChargeBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M15 4H9C6.24 4 4 6.24 4 9V15C4 17.76 6.24 20 9 20H15C17.76 20 20 17.76 20 15V9C20 6.24 17.76 4 15 4ZM17.26 14.26C17.26 15.92 15.92 17.26 14.26 17.26H9.74C8.08 17.26 6.74 15.92 6.74 14.26V9.74C6.74 8.08 8.08 6.74 9.74 6.74H14.25C15.91 6.74 17.25 8.08 17.25 9.74V14.26H17.26Z" fill={color} />
<path d="M9.06055 2.75V4H9.00055C8.50055 4 8.02055 4.07 7.56055 4.21V2.75C7.56055 2.34 7.89055 2 8.31055 2C8.72055 2 9.06055 2.34 9.06055 2.75Z" fill={color} />
<path d="M12.75 2.75V4H11.25V2.75C11.25 2.34 11.59 2 12 2C12.41 2 12.75 2.34 12.75 2.75Z" fill={color} />
<path d="M16.4492 2.75V4.21C15.9892 4.07 15.4992 4 14.9992 4H14.9492V2.75C14.9492 2.34 15.2892 2 15.6992 2C16.1092 2 16.4492 2.34 16.4492 2.75Z" fill={color} />
<path d="M21.9991 8.30005C21.9991 8.72005 21.6691 9.05005 21.2491 9.05005H19.9991V9.00005C19.9991 8.50005 19.9291 8.01005 19.7891 7.55005H21.2491C21.6691 7.55005 21.9991 7.89005 21.9991 8.30005Z" fill={color} />
<path d="M22 12C22 12.41 21.67 12.75 21.25 12.75H20V11.25H21.25C21.67 11.25 22 11.58 22 12Z" fill={color} />
<path d="M21.9991 15.7C21.9991 16.11 21.6691 16.45 21.2491 16.45H19.7891C19.9291 15.99 19.9991 15.5 19.9991 15V14.95H21.2491C21.6691 14.95 21.9991 15.28 21.9991 15.7Z" fill={color} />
<path d="M16.4492 19.79V21.25C16.4492 21.66 16.1092 22 15.6992 22C15.2892 22 14.9492 21.66 14.9492 21.25V20H14.9992C15.4992 20 15.9892 19.93 16.4492 19.79Z" fill={color} />
<path d="M12.7598 20V21.25C12.7598 21.66 12.4198 22 12.0098 22C11.5898 22 11.2598 21.66 11.2598 21.25V20H12.7598Z" fill={color} />
<path d="M9.06055 20V21.25C9.06055 21.66 8.72055 22 8.31055 22C7.89055 22 7.56055 21.66 7.56055 21.25V19.79C8.02055 19.93 8.50055 20 9.00055 20H9.06055Z" fill={color} />
<path d="M4.21 7.55005C4.07 8.01005 4 8.50005 4 9.00005V9.05005H2.75C2.34 9.05005 2 8.72005 2 8.30005C2 7.89005 2.34 7.55005 2.75 7.55005H4.21Z" fill={color} />
<path d="M4 11.25V12.75H2.75C2.34 12.75 2 12.41 2 12C2 11.58 2.34 11.25 2.75 11.25H4Z" fill={color} />
<path d="M4.21 16.45H2.75C2.34 16.45 2 16.11 2 15.7C2 15.28 2.34 14.95 2.75 14.95H4V15C4 15.5 4.07 15.99 4.21 16.45Z" fill={color} />
<path d="M14.2602 6.73999H9.74023C8.08023 6.73999 6.74023 8.07999 6.74023 9.73999V14.25C6.74023 15.91 8.08023 17.25 9.74023 17.25H14.2502C15.9102 17.25 17.2502 15.91 17.2502 14.25V9.73999C17.2602 8.08999 15.9102 6.73999 14.2602 6.73999ZM13.5902 13.04L12.6502 14.68C12.5102 14.92 12.2602 15.06 12.0002 15.06C11.8702 15.06 11.7402 15.03 11.6302 14.96C11.2702 14.75 11.1502 14.29 11.3502 13.94L12.0302 12.76H11.4402C10.9602 12.76 10.5702 12.55 10.3602 12.19C10.1502 11.83 10.1702 11.38 10.4002 10.97L11.3402 9.32999C11.5502 8.96999 12.0102 8.84999 12.3602 9.04999C12.7202 9.25999 12.8402 9.71999 12.6402 10.07L11.9602 11.25H12.5502C13.0302 11.25 13.4202 11.46 13.6302 11.82C13.8502 12.18 13.8302 12.62 13.5902 13.04Z" fill={color} />
        </svg>
      )
    }
    
    
    export default CpuChargeBulkIcon;
      