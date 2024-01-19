
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const WalletRemoveOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M17.0005 22.75H7.63049C7.31049 22.75 7.03047 22.55 6.92047 22.26C6.81047 21.97 6.9005 21.63 7.1405 21.43C7.3805 21.23 7.6005 20.97 7.7605 20.69C8.0805 20.18 8.24048 19.6 8.24048 19.01C8.24048 17.22 6.78048 15.76 4.99048 15.76C4.06048 15.76 3.17048 16.16 2.55048 16.87C2.34048 17.1 2.01046 17.19 1.72046 17.08C1.43046 16.97 1.23047 16.69 1.23047 16.38V12C1.23047 8.92 3.13051 6.69001 6.08051 6.32001C6.35051 6.28001 6.66047 6.25 6.98047 6.25H16.9805C17.2205 6.25 17.5305 6.26 17.8505 6.31C20.8005 6.65 22.7305 8.89 22.7305 12V17C22.7505 20.44 20.4405 22.75 17.0005 22.75ZM9.18048 21.25H17.0005C19.5805 21.25 21.2505 19.58 21.2505 17V12C21.2505 9.66 19.8805 8.04998 17.6605 7.78998C17.4205 7.74998 17.2105 7.75 17.0005 7.75H7.00049C6.76049 7.75 6.53048 7.76999 6.30048 7.79999C4.10048 8.07999 2.75049 9.68 2.75049 12V14.82C3.43049 14.45 4.21049 14.25 5.00049 14.25C7.62049 14.25 9.75049 16.38 9.75049 19C9.75049 19.79 9.55048 20.57 9.18048 21.25Z" fill={color} />
<path d="M6.19003 7.80995C5.95003 7.80995 5.73005 7.69995 5.58005 7.49995C5.41005 7.26995 5.39005 6.96992 5.52005 6.71992C5.69005 6.37992 5.93002 6.04995 6.24002 5.74995L9.49002 2.48994C11.15 0.839941 13.85 0.839941 15.51 2.48994L17.26 4.26997C18 4.99997 18.45 5.97997 18.5 7.01997C18.51 7.24997 18.42 7.46995 18.25 7.61995C18.08 7.76995 17.85 7.83994 17.63 7.79994C17.43 7.76994 17.22 7.75996 17 7.75996H7.00003C6.76003 7.75996 6.53002 7.77995 6.30002 7.80995C6.27002 7.80995 6.23003 7.80995 6.19003 7.80995ZM7.86001 6.24995H16.82C16.69 5.90995 16.48 5.59996 16.2 5.31996L14.44 3.53993C13.37 2.47993 11.62 2.47993 10.54 3.53993L7.86001 6.24995Z" fill={color} />
<path d="M22 17.25H19C17.48 17.25 16.25 16.02 16.25 14.5C16.25 12.98 17.48 11.75 19 11.75H22C22.41 11.75 22.75 12.09 22.75 12.5C22.75 12.91 22.41 13.25 22 13.25H19C18.31 13.25 17.75 13.81 17.75 14.5C17.75 15.19 18.31 15.75 19 15.75H22C22.41 15.75 22.75 16.09 22.75 16.5C22.75 16.91 22.41 17.25 22 17.25Z" fill={color} />
<path d="M5 23.75C3.34 23.75 1.78 22.87 0.940002 21.44C0.490002 20.72 0.25 19.87 0.25 19C0.25 17.85 0.670002 16.74 1.44 15.87C2.34 14.84 3.64 14.25 5 14.25C7.62 14.25 9.75 16.38 9.75 19C9.75 19.87 9.51 20.72 9.06 21.45C8.81 21.87 8.48999 22.25 8.10999 22.57C7.27999 23.33 6.17 23.75 5 23.75ZM5 15.75C4.07 15.75 3.18 16.15 2.56 16.86C2.04 17.46 1.75 18.22 1.75 19C1.75 19.59 1.90997 20.17 2.21997 20.67C2.79997 21.65 3.87 22.25 5 22.25C5.79 22.25 6.55 21.96 7.13 21.44C7.39001 21.22 7.61002 20.96 7.77002 20.68C8.09002 20.17 8.25 19.59 8.25 19C8.25 17.21 6.79 15.75 5 15.75Z" fill={color} />
<path d="M6.07041 20.7901C5.88041 20.7901 5.69038 20.7201 5.54038 20.5701L3.43039 18.4601C3.14039 18.1701 3.14039 17.6901 3.43039 17.4001C3.72039 17.1101 4.20039 17.1101 4.49039 17.4001L6.60037 19.5101C6.89037 19.8001 6.89037 20.2801 6.60037 20.5701C6.45037 20.7201 6.26041 20.7901 6.07041 20.7901Z" fill={color} />
<path d="M3.93106 20.8199C3.74106 20.8199 3.55109 20.7499 3.40109 20.5999C3.11109 20.3099 3.11109 19.8299 3.40109 19.5399L5.51108 17.4299C5.80108 17.1399 6.28108 17.1399 6.57108 17.4299C6.86108 17.7199 6.86108 18.1999 6.57108 18.4899L4.46109 20.5999C4.31109 20.7499 4.12106 20.8199 3.93106 20.8199Z" fill={color} />
        </svg>
      )
    }
    
    
    export default WalletRemoveOutlineIcon;
      