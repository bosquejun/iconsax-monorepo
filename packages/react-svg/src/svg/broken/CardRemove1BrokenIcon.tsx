
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const CardRemove1BrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M2 8.5H13.5" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M6 16.5H8" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M10.5 16.5H14.5" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2 11.03V7.89C2 4.38 2.89 3.5 6.44 3.5H13.5" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M22 12.03V16.11C22 19.62 21.11 20.5 17.56 20.5H6.44C2.89 20.5 2 19.62 2 16.11V15.02" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M17.3105 8.19006L21.1905 4.31006" stroke={color} stroke-width="1.5" stroke-linecap="round" />
<path d="M21.1905 8.19006L17.3105 4.31006" stroke={color} stroke-width="1.5" stroke-linecap="round" />
        </svg>
      )
    }
    
    
    export default CardRemove1BrokenIcon;
      