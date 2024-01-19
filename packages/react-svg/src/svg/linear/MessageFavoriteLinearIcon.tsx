
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MessageFavoriteLinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H12" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M15.2 4.62008C14.87 3.63008 15.26 2.41008 16.34 2.07008C16.9 1.90008 17.6 2.04008 18 2.57008C18.38 2.02008 19.1 1.90008 19.66 2.07008C20.74 2.40008 21.13 3.63008 20.8 4.62008C20.29 6.19008 18.5 7.00008 18 7.00008C17.5 7.00008 15.73 6.20008 15.2 4.62008Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M15.9965 11H16.0054" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
<path d="M11.9955 11H12.0045" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
<path d="M7.99451 11H8.00349" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default MessageFavoriteLinearIcon;
      