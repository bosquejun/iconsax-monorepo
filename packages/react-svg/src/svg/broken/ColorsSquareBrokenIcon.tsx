
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ColorsSquareBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M13.2 14.3999C13.2 15.4599 12.74 16.4199 12 17.0799C11.36 17.6599 10.52 17.9999 9.59998 17.9999C7.60998 17.9999 6 16.3899 6 14.3999C6 12.7399 7.13002 11.3399 8.65002 10.9299C9.06002 11.9699 9.94999 12.7799 11.05 13.0799C11.35 13.1599 11.67 13.2099 12 13.2099C12.33 13.2099 12.65 13.1699 12.95 13.0799C13.11 13.4799 13.2 13.9299 13.2 14.3999Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M15.6003 9.6C15.6003 10.07 15.5103 10.52 15.3503 10.93C14.9403 11.97 14.0504 12.78 12.9504 13.08C12.6504 13.16 12.3304 13.21 12.0004 13.21C11.6704 13.21 11.3504 13.17 11.0504 13.08C9.95035 12.78 9.06039 11.98 8.65039 10.93C8.49039 10.52 8.40039 10.07 8.40039 9.6C8.40039 7.61 10.0104 6 12.0004 6C13.9904 6 15.6003 7.61 15.6003 9.6Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M18 14.3999C18 16.3899 16.39 17.9999 14.4 17.9999C13.48 17.9999 12.64 17.6499 12 17.0799C12.74 16.4299 13.2 15.4699 13.2 14.3999C13.2 13.9299 13.11 13.4799 12.95 13.0699C14.05 12.7699 14.94 11.9699 15.35 10.9199C16.87 11.3399 18 12.7399 18 14.3999Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2 13.2V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default ColorsSquareBrokenIcon;
      