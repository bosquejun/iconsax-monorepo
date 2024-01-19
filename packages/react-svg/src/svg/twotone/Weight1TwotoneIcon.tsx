
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Weight1TwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M17.1797 18C19.5797 18 20.1797 16.65 20.1797 15V9C20.1797 7.35 19.5797 6 17.1797 6C14.7797 6 14.1797 7.35 14.1797 9V15C14.1797 16.65 14.7797 18 17.1797 18Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M6.82031 18C4.42031 18 3.82031 16.65 3.82031 15V9C3.82031 7.35 4.42031 6 6.82031 6C9.22031 6 9.82031 7.35 9.82031 9V15C9.82031 16.65 9.22031 18 6.82031 18Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M9.82031 12H14.1803" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M22.5 14.5V9.5" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M1.5 14.5V9.5" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default Weight1TwotoneIcon;
      