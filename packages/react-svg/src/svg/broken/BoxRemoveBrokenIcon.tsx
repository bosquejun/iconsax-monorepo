
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const BoxRemoveBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M3.16992 7.43994L11.9999 12.5499L20.7699 7.46991" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12 21.61V12.54" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2.39062 14.83V9.17C2.39062 7.79 3.38061 6.11002 4.59061 5.44002L9.9306 2.48C11.0706 1.84 12.9306 1.84 14.0706 2.48L19.4106 5.44002C20.6206 6.11002 21.6106 7.79 21.6106 9.17V14.83C21.6106 14.88 21.6106 14.92 21.6006 14.97C20.9006 14.36 20.0006 14 19.0006 14C18.0606 14 17.1906 14.33 16.5006 14.88C15.5806 15.61 15.0006 16.74 15.0006 18C15.0006 18.75 15.2106 19.46 15.5806 20.06C15.6706 20.22 15.7806 20.37 15.9006 20.51L14.0706 21.52C12.9306 22.16 11.0706 22.16 9.9306 21.52L4.59061 18.56" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M23 18C23 18.75 22.79 19.46 22.42 20.06C22.21 20.42 21.94 20.74 21.63 21C20.93 21.63 20.01 22 19 22C17.54 22 16.27 21.22 15.58 20.06C15.21 19.46 15 18.75 15 18C15 16.74 15.58 15.61 16.5 14.88C17.19 14.33 18.06 14 19 14C21.21 14 23 15.79 23 18Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M20.0692 19.0399L17.9492 16.9299" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M20.0497 16.96L17.9297 19.0699" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default BoxRemoveBrokenIcon;
      