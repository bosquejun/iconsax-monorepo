
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const CpuSettingBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M20 9V11.92L19.22 11.47C18.58 11.1 17.78 11.21 17.26 11.71C17.15 11.81 17.06 11.93 16.98 12.06L16.92 12.17C16.81 12.36 16.72 12.41 16.71 12.42C16.69 12.41 16.59 12.36 16.48 12.16L16.42 12.06C16.2 11.68 15.85 11.42 15.43 11.31C15 11.19 14.56 11.25 14.19 11.47L13.28 12C12.87 12.23 12.58 12.61 12.46 13.06C12.34 13.52 12.4 13.99 12.63 14.4C12.74 14.58 12.74 14.69 12.74 14.71C12.73 14.72 12.63 14.78 12.41 14.78C11.44 14.78 10.65 15.57 10.65 16.53V17.47C10.65 18.43 11.44 19.22 12.41 19.22C12.63 19.22 12.73 19.28 12.73 19.29C12.74 19.3 12.74 19.42 12.63 19.6C12.56 19.73 12.5 19.86 12.47 20H9C6.24 20 4 17.76 4 15V9C4 6.24 6.24 4 9 4H15C17.76 4 20 6.24 20 9Z" fill={color} />
<path d="M17.2602 9.73999V11.71C17.1502 11.81 17.0602 11.93 16.9802 12.06L16.9202 12.17C16.8102 12.36 16.7202 12.41 16.7102 12.42C16.6902 12.41 16.5902 12.36 16.4802 12.16L16.4202 12.06C16.2002 11.68 15.8502 11.42 15.4302 11.31C15.0002 11.19 14.5602 11.25 14.1902 11.47L13.2802 12C12.8702 12.23 12.5802 12.61 12.4602 13.06C12.3402 13.52 12.4002 13.99 12.6302 14.4C12.7402 14.58 12.7402 14.69 12.7402 14.71C12.7302 14.72 12.6302 14.78 12.4102 14.78C11.4402 14.78 10.6502 15.57 10.6502 16.53V17.26H9.74023C8.09023 17.26 6.74023 15.91 6.74023 14.26V9.73999C6.74023 8.08999 8.09023 6.73999 9.74023 6.73999H14.2602C15.9102 6.73999 17.2602 8.08999 17.2602 9.73999Z" fill={color} />
<path d="M9.06055 2.75V4H9.00055C8.50055 4 8.02055 4.07 7.56055 4.21V2.75C7.56055 2.34 7.89055 2 8.31055 2C8.72055 2 9.06055 2.34 9.06055 2.75Z" fill={color} />
<path d="M12.75 2.75V4H11.25V2.75C11.25 2.34 11.59 2 12 2C12.41 2 12.75 2.34 12.75 2.75Z" fill={color} />
<path d="M16.4492 2.75V4.21C15.9892 4.07 15.4992 4 14.9992 4H14.9492V2.75C14.9492 2.34 15.2892 2 15.6992 2C16.1092 2 16.4492 2.34 16.4492 2.75Z" fill={color} />
<path d="M21.9991 8.30005C21.9991 8.72005 21.6691 9.05005 21.2491 9.05005H19.9991V9.00005C19.9991 8.50005 19.9291 8.01005 19.7891 7.55005H21.2491C21.6691 7.55005 21.9991 7.89005 21.9991 8.30005Z" fill={color} />
<path d="M9.06055 20V21.25C9.06055 21.66 8.72055 22 8.31055 22C7.89055 22 7.56055 21.66 7.56055 21.25V19.79C8.02055 19.93 8.50055 20 9.00055 20H9.06055Z" fill={color} />
<path d="M4.21 7.55005C4.07 8.01005 4 8.50005 4 9.00005V9.05005H2.75C2.34 9.05005 2 8.72005 2 8.30005C2 7.89005 2.34 7.55005 2.75 7.55005H4.21Z" fill={color} />
<path d="M4 11.25V12.75H2.75C2.34 12.75 2 12.41 2 12C2 11.58 2.34 11.25 2.75 11.25H4Z" fill={color} />
<path d="M4.21 16.45H2.75C2.34 16.45 2 16.11 2 15.7C2 15.28 2.34 14.95 2.75 14.95H4V15C4 15.5 4.07 15.99 4.21 16.45Z" fill={color} />
<path opacity="0.4" d="M20.9904 15.53C20.3104 15.53 19.9204 15.19 19.9204 14.69C19.9204 14.49 19.9804 14.26 20.1204 14.02C20.4004 13.54 20.2304 12.92 19.7504 12.65L18.8404 12.12C18.4204 11.87 17.8804 12.02 17.6304 12.44L17.5704 12.54C17.0904 13.37 16.3104 13.37 15.8304 12.54L15.7704 12.44C15.5304 12.02 14.9804 11.87 14.5704 12.12L13.6504 12.65C13.3304 12.83 13.1404 13.17 13.1404 13.52C13.1404 13.69 13.1904 13.86 13.2804 14.02C13.4204 14.26 13.4904 14.49 13.4904 14.69C13.4904 15.19 13.0904 15.53 12.4104 15.53C11.8604 15.53 11.4004 15.98 11.4004 16.53V17.47C11.4004 18.02 11.8604 18.47 12.4104 18.47C13.0904 18.47 13.4904 18.81 13.4904 19.31C13.4904 19.51 13.4204 19.74 13.2804 19.98C13.0004 20.46 13.1704 21.08 13.6504 21.35L14.5704 21.88C14.9804 22.13 15.5304 21.98 15.7704 21.56L15.8304 21.46C16.3104 20.63 17.0904 20.63 17.5704 21.46L17.6304 21.56C17.8804 21.98 18.4204 22.13 18.8404 21.88L19.7504 21.35C20.0704 21.17 20.2604 20.83 20.2604 20.48C20.2604 20.31 20.2104 20.14 20.1204 19.98C19.9804 19.74 19.9204 19.51 19.9204 19.31C19.9204 18.81 20.3104 18.47 20.9904 18.47C21.5504 18.47 22.0004 18.02 22.0004 17.47V16.53C22.0004 15.98 21.5504 15.53 20.9904 15.53ZM16.7004 18.72C15.7504 18.72 14.9804 17.95 14.9804 17C14.9804 16.05 15.7504 15.28 16.7004 15.28C17.6504 15.28 18.4204 16.05 18.4204 17C18.4204 17.95 17.6504 18.72 16.7004 18.72Z" fill={color} />
<path d="M18.4205 17C18.4205 17.95 17.6505 18.72 16.7005 18.72C15.7505 18.72 14.9805 17.95 14.9805 17C14.9805 16.05 15.7505 15.28 16.7005 15.28C17.6505 15.28 18.4205 16.05 18.4205 17Z" fill={color} />
        </svg>
      )
    }
    
    
    export default CpuSettingBulkIcon;
      