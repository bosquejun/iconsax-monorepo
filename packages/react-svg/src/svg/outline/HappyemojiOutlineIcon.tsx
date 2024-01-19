
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const HappyemojiOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M11.9707 22.75C6.0507 22.75 1.2207 17.93 1.2207 12C1.2207 6.07 6.0507 1.25 11.9707 1.25C17.8907 1.25 22.7207 6.07 22.7207 12C22.7207 17.93 17.9007 22.75 11.9707 22.75ZM11.9707 2.75C6.8707 2.75 2.7207 6.9 2.7207 12C2.7207 17.1 6.8707 21.25 11.9707 21.25C17.0707 21.25 21.2207 17.1 21.2207 12C21.2207 6.9 17.0707 2.75 11.9707 2.75Z" fill={color} />
<path d="M11.9999 19.2499C9.84988 19.2499 7.82988 18.1999 6.59988 16.4299C6.35988 16.0899 6.44988 15.6199 6.78988 15.3899C7.12988 15.1499 7.59988 15.2399 7.82988 15.5799C8.77988 16.9399 10.3399 17.7599 11.9999 17.7599C13.6599 17.7599 15.2199 16.9499 16.1699 15.5799C16.4099 15.2399 16.8699 15.1599 17.2099 15.3899C17.5499 15.6299 17.6299 16.0899 17.3999 16.4299C16.1699 18.1999 14.1499 19.2499 11.9999 19.2499Z" fill={color} />
        </svg>
      )
    }
    
    
    export default HappyemojiOutlineIcon;
      