
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const PictureFrameBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M10.51 11.22L8.31 2.39C8.26 2.16 8.05 2 7.81 2C4.6 2 2 4.6 2 7.81V13.51C2 13.85 2.33 14.1 2.66 14L10.16 11.83C10.42 11.76 10.58 11.49 10.51 11.22Z" fill={color} />
<path d="M11.12 13.6789C11.05 13.3989 10.76 13.2289 10.48 13.3089L2.37 15.6689C2.15 15.7389 2 15.9389 2 16.1689V16.1889C2 19.3989 4.6 21.9989 7.81 21.9989H12.53C12.86 21.9989 13.11 21.6889 13.03 21.3589L11.12 13.6789Z" fill={color} />
<path d="M16.1908 2H10.4408C10.1108 2 9.86081 2.31 9.94081 2.64L14.6808 21.61C14.7408 21.84 14.9408 22 15.1808 22H16.1808C19.4008 22 22.0008 19.4 22.0008 16.19V7.81C22.0008 4.6 19.4008 2 16.1908 2Z" fill={color} />
        </svg>
      )
    }
    
    
    export default PictureFrameBoldIcon;
      