
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const LikeTagLinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M9.65002 13.8L11.26 15.05C11.47 15.26 11.94 15.3599 12.25 15.3599H14.23C14.85 15.3599 15.53 14.89 15.69 14.27L16.94 10.4799C17.2 9.74994 16.73 9.12996 15.95 9.12996H13.87C13.56 9.12996 13.3 8.86996 13.35 8.50996L13.61 6.84993C13.71 6.37993 13.4 5.85992 12.93 5.70992C12.51 5.54992 11.99 5.7599 11.79 6.0699L9.66003 9.23995" stroke={color} stroke-width="1.5" stroke-miterlimit="10" />
<path d="M7 13.8V8.70996C7 7.97996 7.30999 7.71997 8.03999 7.71997H8.56C9.29 7.71997 9.60001 7.97996 9.60001 8.70996V13.8C9.60001 14.53 9.29 14.79 8.56 14.79H8.03999C7.30999 14.79 7 14.53 7 13.8Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M18 18.86H17.24C16.44 18.86 15.68 19.17 15.12 19.73L13.41 21.42C12.63 22.19 11.36 22.19 10.58 21.42L8.87 19.73C8.31 19.17 7.54 18.86 6.75 18.86H6C4.34 18.86 3 17.53 3 15.89V4.97998C3 3.33998 4.34 2.01001 6 2.01001H18C19.66 2.01001 21 3.33998 21 4.97998V15.89C21 17.52 19.66 18.86 18 18.86Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default LikeTagLinearIcon;
      