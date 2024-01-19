
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const HappyemojiBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M11.9707 22C17.4936 22 21.9707 17.5228 21.9707 12C21.9707 6.47715 17.4936 2 11.9707 2C6.44786 2 1.9707 6.47715 1.9707 12C1.9707 17.5228 6.44786 22 11.9707 22Z" fill={color} />
<path d="M11.9999 19.2499C9.84988 19.2499 7.82988 18.1999 6.59988 16.4299C6.35988 16.0899 6.44988 15.6199 6.78988 15.3899C7.12988 15.1499 7.59988 15.2399 7.82988 15.5799C8.77988 16.9399 10.3399 17.7599 11.9999 17.7599C13.6599 17.7599 15.2199 16.9499 16.1699 15.5799C16.4099 15.2399 16.8699 15.1599 17.2099 15.3899C17.5499 15.6299 17.6299 16.0899 17.3999 16.4299C16.1699 18.1999 14.1499 19.2499 11.9999 19.2499Z" fill={color} />
        </svg>
      )
    }
    
    
    export default HappyemojiBulkIcon;
      