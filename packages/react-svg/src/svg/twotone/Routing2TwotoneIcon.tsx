
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Routing2TwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M5.4707 9C7.4037 9 8.9707 7.433 8.9707 5.5C8.9707 3.567 7.4037 2 5.4707 2C3.53771 2 1.9707 3.567 1.9707 5.5C1.9707 7.433 3.53771 9 5.4707 9Z" stroke={color} stroke-width="1.5" />
<path opacity="0.4" d="M16.9707 15H19.9707C21.0707 15 21.9707 15.9 21.9707 17V20C21.9707 21.1 21.0707 22 19.9707 22H16.9707C15.8707 22 14.9707 21.1 14.9707 20V17C14.9707 15.9 15.8707 15 16.9707 15Z" stroke={color} stroke-width="1.5" />
<path d="M11.9997 5H14.6797C16.5297 5 17.3897 7.29 15.9997 8.51L8.0097 15.5C6.6197 16.71 7.4797 19 9.3197 19H11.9997" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M5.48573 5.5H5.49728" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
<path d="M18.4857 18.5H18.4973" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default Routing2TwotoneIcon;
      