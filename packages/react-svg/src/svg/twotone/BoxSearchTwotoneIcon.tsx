
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const BoxSearchTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M3.16992 7.43994L11.9999 12.5499L20.7699 7.46991" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12 21.61V12.54" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M21.6106 12.83V9.17C21.6106 7.79 20.6206 6.11002 19.4106 5.44002L14.0706 2.48C12.9306 1.84 11.0706 1.84 9.9306 2.48L4.59061 5.44002C3.38061 6.11002 2.39062 7.79 2.39062 9.17V14.83C2.39062 16.21 3.38061 17.89 4.59061 18.56L9.9306 21.52C10.5006 21.84 11.2506 22 12.0006 22C12.7506 22 13.5006 21.84 14.0706 21.52" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default BoxSearchTwotoneIcon;
      