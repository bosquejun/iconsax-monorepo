
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const GlobalRefreshTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M19.4998 14.7C19.1298 14.59 18.7098 14.52 18.2498 14.52C16.1798 14.52 14.5098 16.2 14.5098 18.26C14.5098 20.33 16.1898 22 18.2498 22C20.3098 22 21.9897 20.32 21.9897 18.26C21.9897 17.49 21.7597 16.77 21.3597 16.18" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M20.041 14.8001L18.791 13.3701" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M20.0401 14.8003L18.5801 15.8603" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default GlobalRefreshTwotoneIcon;
      