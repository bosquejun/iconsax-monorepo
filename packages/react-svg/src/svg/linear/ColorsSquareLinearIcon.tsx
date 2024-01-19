
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ColorsSquareLinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M13.2 14.3999C13.2 15.4599 12.74 16.4199 12 17.0799C11.36 17.6599 10.52 17.9999 9.59998 17.9999C7.60998 17.9999 6 16.3899 6 14.3999C6 12.7399 7.13002 11.3399 8.65002 10.9299C9.06002 11.9699 9.94999 12.7799 11.05 13.0799C11.35 13.1599 11.67 13.2099 12 13.2099C12.33 13.2099 12.65 13.1699 12.95 13.0799C13.11 13.4799 13.2 13.9299 13.2 14.3999Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M15.6 9.6C15.6 10.07 15.51 10.52 15.35 10.93C14.94 11.97 14.05 12.78 12.95 13.08C12.65 13.16 12.33 13.21 12 13.21C11.67 13.21 11.35 13.17 11.05 13.08C9.94999 12.78 9.06002 11.98 8.65002 10.93C8.49002 10.52 8.40002 10.07 8.40002 9.6C8.40002 7.61 10.01 6 12 6C13.99 6 15.6 7.61 15.6 9.6Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M18 14.3999C18 16.3899 16.39 17.9999 14.4 17.9999C13.48 17.9999 12.64 17.6499 12 17.0799C12.74 16.4299 13.2 15.4699 13.2 14.3999C13.2 13.9299 13.11 13.4799 12.95 13.0699C14.05 12.7699 14.94 11.9699 15.35 10.9199C16.87 11.3399 18 12.7399 18 14.3999Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default ColorsSquareLinearIcon;
      