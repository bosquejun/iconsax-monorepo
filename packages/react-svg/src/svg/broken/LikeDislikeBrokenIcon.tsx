
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const LikeDislikeBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M4.91992 20.28L6.68993 21.65C6.91993 21.88 7.42992 21.99 7.77992 21.99H9.94992C10.6399 21.99 11.3799 21.48 11.5499 20.79L12.9199 16.62C13.2099 15.82 12.6899 15.13 11.8299 15.13H9.53992C9.19992 15.13 8.90992 14.8399 8.96992 14.4399L9.25993 12.61C9.36993 12.1 9.02992 11.52 8.51992 11.35C8.05992 11.18 7.48993 11.41 7.25993 11.75L4.91992 15.24" stroke={color} stroke-width="1.5" stroke-miterlimit="10" />
<path d="M2 20.28C2 21.08 2.34 21.37 3.14 21.37H3.71C4.51 21.37 4.85 21.08 4.85 20.28V14.6801C4.85 13.8801 4.51 13.59 3.71 13.59H3.14C2.34 13.59 2 13.8801 2 14.6801V16.1801" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M19.0808 3.71997L17.3108 2.34998C17.0808 2.11998 16.5708 2.01001 16.2208 2.01001H14.0508C13.3608 2.01001 12.6208 2.51996 12.4508 3.20996L11.0808 7.38C10.7908 8.18 11.3108 8.87 12.1708 8.87H14.4608C14.8008 8.87 15.0908 9.16006 15.0308 9.56006L14.7408 11.39C14.6308 11.9 14.9708 12.48 15.4808 12.65C15.9408 12.82 16.5108 12.59 16.7408 12.25L19.0808 8.76001" stroke={color} stroke-width="1.5" stroke-miterlimit="10" />
<path d="M22.0004 3.71997C22.0004 2.91997 21.6604 2.63 20.8604 2.63H20.2904C19.4904 2.63 19.1504 2.91997 19.1504 3.71997V9.31995C19.1504 10.1199 19.4904 10.41 20.2904 10.41H20.8604C21.6604 10.41 22.0004 10.1199 22.0004 9.31995V8" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default LikeDislikeBrokenIcon;
      