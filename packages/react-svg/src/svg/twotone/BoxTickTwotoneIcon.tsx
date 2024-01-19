
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const BoxTickTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M22.9992 17.91C23.0192 18.66 22.8192 19.37 22.4592 19.98C22.2592 20.34 21.9892 20.6701 21.6892 20.9401C20.9992 21.5801 20.0892 21.9701 19.0792 22.0001C17.6192 22.0301 16.3292 21.2801 15.6192 20.1301C15.2392 19.5401 15.0092 18.8301 14.9992 18.0801C14.9692 16.8201 15.5292 15.6801 16.4292 14.9301C17.1092 14.3701 17.9692 14.0201 18.9092 14.0001C21.1192 13.9501 22.9492 15.7 22.9992 17.91Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M17.4395 18.0303L18.4495 18.9902L20.5395 16.9702" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default BoxTickTwotoneIcon;
      