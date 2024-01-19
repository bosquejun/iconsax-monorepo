
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const GridEraserTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M22 11V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H10" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M18.7995 19.7L16.8995 21.6C16.3795 22.12 15.5195 22.12 14.9895 21.6L13.4095 20.01C12.8895 19.49 12.8895 18.63 13.4095 18.1L15.3095 16.21L18.7995 19.7Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M21.6108 16.9L18.8008 19.7099L15.3008 16.2099L18.1108 13.39C18.6308 12.87 19.5008 12.87 20.0208 13.39L21.6008 14.98C22.1308 15.51 22.1308 16.38 21.6108 16.9Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default GridEraserTwotoneIcon;
      