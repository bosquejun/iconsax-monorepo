
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const CpuSettingBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M4.09 8.08C4.04 8.38 4 8.68 4 9C4 8.69 4.04 8.38 4.09 8.08ZM4 15C4 15.32 4.04 15.62 4.09 15.92C4.04 15.62 4 15.31 4 15ZM8.09 19.91C8.38 19.96 8.69 20 9 20C8.69 20 8.39 19.96 8.09 19.91ZM8.09 4.09C8.39 4.04 8.69 4 9 4C8.69 4 8.38 4.04 8.09 4.09ZM15.92 4.09C15.62 4.04 15.32 4 15 4C15.31 4 15.62 4.04 15.92 4.09ZM19.91 8.08C19.96 8.38 20 8.69 20 9C20 8.68 19.96 8.38 19.91 8.08Z" fill={color} />
<path d="M22 8.3C22 8.72 21.67 9.05 21.25 9.05H20V10.8871C20 11.2207 19.638 11.4284 19.35 11.26C18.92 11.01 18.42 10.93 17.94 11.06C17.6321 11.1339 17.26 10.9349 17.26 10.6183V9.74C17.26 8.09 15.91 6.74 14.26 6.74H9.74C8.09 6.74 6.74 8.09 6.74 9.74V14.26C6.74 15.91 8.09 17.26 9.74 17.26H10.19C10.306 17.26 10.4 17.354 10.4 17.47C10.4 18.4335 11.0982 19.2436 12.0175 19.4298C12.1904 19.4648 12.3073 19.6716 12.25 19.8383C12.2172 19.9337 12.1302 20 12.0293 20H9.06V21.25C9.06 21.66 8.72 22 8.31 22C7.89 22 7.56 21.66 7.56 21.25V19.78C5.96 19.29 4.71 18.04 4.23 16.45H2.75C2.34 16.45 2 16.11 2 15.7C2 15.28 2.34 14.95 2.75 14.95H4V12.75H2.75C2.34 12.75 2 12.41 2 12C2 11.58 2.34 11.25 2.75 11.25H4V9.05H2.75C2.34 9.05 2 8.72 2 8.3C2 7.89 2.34 7.55 2.75 7.55H4.23C4.71 5.96 5.96 4.71 7.56 4.22V2.75C7.56 2.34 7.89 2 8.31 2C8.72 2 9.06 2.34 9.06 2.75V4H11.25V2.75C11.25 2.34 11.59 2 12 2C12.41 2 12.75 2.34 12.75 2.75V4H14.95V2.75C14.95 2.34 15.29 2 15.7 2C16.11 2 16.45 2.34 16.45 2.75V4.23C18.04 4.71 19.29 5.96 19.77 7.55H21.25C21.67 7.55 22 7.89 22 8.3Z" fill={color} />
<path d="M20.9904 15.5315C20.3104 15.5315 19.9204 15.1915 19.9204 14.6915C19.9204 14.4915 19.9804 14.2615 20.1204 14.0215C20.4004 13.5415 20.2304 12.9215 19.7504 12.6515L18.8404 12.1215C18.4204 11.8715 17.8804 12.0215 17.6304 12.4415L17.5704 12.5415C17.0904 13.3715 16.3104 13.3715 15.8304 12.5415L15.7704 12.4415C15.5304 12.0215 14.9804 11.8715 14.5704 12.1215L13.6504 12.6515C13.3304 12.8315 13.1404 13.1715 13.1404 13.5215C13.1404 13.6915 13.1904 13.8615 13.2804 14.0215C13.4204 14.2615 13.4904 14.4915 13.4904 14.6915C13.4904 15.1915 13.0904 15.5315 12.4104 15.5315C11.8604 15.5315 11.4004 15.9815 11.4004 16.5315V17.4715C11.4004 18.0215 11.8604 18.4715 12.4104 18.4715C13.0904 18.4715 13.4904 18.8115 13.4904 19.3115C13.4904 19.5115 13.4204 19.7415 13.2804 19.9815C13.0004 20.4615 13.1704 21.0815 13.6504 21.3515L14.5704 21.8815C14.9804 22.1315 15.5304 21.9815 15.7704 21.5615L15.8304 21.4615C16.3104 20.6315 17.0904 20.6315 17.5704 21.4615L17.6304 21.5615C17.8804 21.9815 18.4204 22.1315 18.8404 21.8815L19.7504 21.3515C20.0704 21.1715 20.2604 20.8315 20.2604 20.4815C20.2604 20.3115 20.2104 20.1415 20.1204 19.9815C19.9804 19.7415 19.9204 19.5115 19.9204 19.3115C19.9204 18.8115 20.3104 18.4715 20.9904 18.4715C21.5504 18.4715 22.0004 18.0215 22.0004 17.4715V16.5315C22.0004 15.9815 21.5504 15.5315 20.9904 15.5315ZM16.7004 18.7215C15.7504 18.7215 14.9804 17.9515 14.9804 17.0015C14.9804 16.0515 15.7504 15.2815 16.7004 15.2815C17.6504 15.2815 18.4204 16.0515 18.4204 17.0015C18.4204 17.9515 17.6504 18.7215 16.7004 18.7215Z" fill={color} />
<path d="M16.25 10.02V10.5925C16.25 10.9266 15.8047 11.1384 15.48 11.06C14.98 10.93 14.48 11 14.07 11.25L13.16 11.78C12.53 12.13 12.14 12.8 12.14 13.52C12.14 13.5796 12.1425 13.6396 12.1475 13.6996C12.1803 14.0858 11.9103 14.5545 11.5593 14.7191C11.0767 14.9454 10.6979 15.3577 10.5165 15.8624C10.4389 16.0785 10.2496 16.25 10.02 16.25C8.76 16.25 7.75 15.24 7.75 13.98V10.02C7.75 8.76 8.76 7.75 10.02 7.75H13.98C15.24 7.75 16.25 8.76 16.25 10.02Z" fill={color} />
        </svg>
      )
    }
    
    
    export default CpuSettingBoldIcon;
      