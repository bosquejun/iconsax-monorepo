
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ArrowSquareUpBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.06 14C15.91 14.15 15.72 14.22 15.53 14.22C15.34 14.22 15.15 14.14 15 14L12 11L9 14C8.71 14.29 8.23 14.29 7.94 14C7.65 13.71 7.65 13.23 7.94 12.94L11.47 9.41C11.76 9.12 12.24 9.12 12.53 9.41L16.06 12.94C16.35 13.23 16.35 13.7 16.06 14Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ArrowSquareUpBoldIcon;
      