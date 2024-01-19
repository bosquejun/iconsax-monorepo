
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const LikeDislikeLinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M4.91998 20.28L6.68999 21.65C6.91999 21.88 7.42998 21.99 7.77998 21.99H9.94998C10.64 21.99 11.38 21.48 11.55 20.79L12.92 16.62C13.21 15.82 12.69 15.13 11.83 15.13H9.53999C9.19999 15.13 8.90999 14.8399 8.96999 14.4399L9.25999 12.61C9.36999 12.1 9.02998 11.52 8.51998 11.35C8.05998 11.18 7.48999 11.41 7.25999 11.75L4.91998 15.24" stroke={color} stroke-width="1.5" stroke-miterlimit="10" />
<path d="M2 20.28V14.6801C2 13.8801 2.34 13.59 3.14 13.59H3.71C4.51 13.59 4.85 13.8801 4.85 14.6801V20.28C4.85 21.08 4.51 21.37 3.71 21.37H3.14C2.34 21.37 2 21.09 2 20.28Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M19.08 3.71997L17.31 2.34998C17.08 2.11998 16.57 2.01001 16.22 2.01001H14.05C13.36 2.01001 12.62 2.51996 12.45 3.20996L11.08 7.38C10.79 8.18 11.31 8.87 12.17 8.87H14.46C14.8 8.87 15.09 9.16006 15.03 9.56006L14.74 11.39C14.63 11.9 14.97 12.48 15.48 12.65C15.94 12.82 16.51 12.59 16.74 12.25L19.08 8.76001" stroke={color} stroke-width="1.5" stroke-miterlimit="10" />
<path d="M22 3.71997V9.31995C22 10.1199 21.66 10.41 20.86 10.41H20.29C19.49 10.41 19.15 10.1199 19.15 9.31995V3.71997C19.15 2.91997 19.49 2.63 20.29 2.63H20.86C21.66 2.63 22 2.90997 22 3.71997Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default LikeDislikeLinearIcon;
      