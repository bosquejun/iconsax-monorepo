
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const DiscoverTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" />
<path opacity="0.4" d="M13.5 8C10.47 8 8 10.48 8 13.5C8 14.87 9.12 16 10.5 16C13.52 16 16 13.52 16 10.5C16 9.13 14.87 8 13.5 8Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default DiscoverTwotoneIcon;
      