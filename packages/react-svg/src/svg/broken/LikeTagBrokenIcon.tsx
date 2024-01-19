
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const LikeTagBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M9.65039 13.8L11.2604 15.05C11.4704 15.26 11.9404 15.3599 12.2504 15.3599H14.2304C14.8504 15.3599 15.5304 14.89 15.6904 14.27L16.9404 10.4799C17.2004 9.74994 16.7304 9.12996 15.9504 9.12996H13.8704C13.5604 9.12996 13.3004 8.86996 13.3504 8.50996L13.6104 6.84993C13.7104 6.37993 13.4004 5.85992 12.9304 5.70992C12.5104 5.54992 11.9904 5.7599 11.7904 6.0699L9.6604 9.23995" stroke={color} stroke-width="1.5" stroke-miterlimit="10" />
<path d="M7 13.8V8.70996C7 7.97996 7.30999 7.71997 8.03999 7.71997H8.56C9.29 7.71997 9.60001 7.97996 9.60001 8.70996V13.8C9.60001 14.53 9.29 14.79 8.56 14.79H8.03999C7.30999 14.79 7 14.53 7 13.8Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M3 4.96997C3 3.32997 4.34 2 6 2H18C19.66 2 21 3.32997 21 4.96997V15.88C21 17.52 19.66 18.85 18 18.85H17.24C16.44 18.85 15.68 19.16 15.12 19.72L13.41 21.41C12.63 22.18 11.36 22.18 10.58 21.41L8.87 19.72C8.31 19.16 7.54 18.85 6.75 18.85H6C4.34 18.85 3 17.52 3 15.88V9.06995" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default LikeTagBrokenIcon;
      