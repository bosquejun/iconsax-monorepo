
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const StarSlashTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M5.28089 18.6501L5.85089 16.1801C5.98089 15.6001 5.75089 14.7901 5.33089 14.3701L2.85089 11.8901C1.39089 10.4301 1.86089 8.95014 3.90089 8.61014L7.09089 8.08014C7.62089 7.99014 8.26089 7.52014 8.50089 7.03014L10.2609 3.51014C11.2109 1.60014 12.7709 1.60014 13.7309 3.51014L15.4909 7.03014C15.6009 7.26014 15.8109 7.48014 16.0409 7.67014" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M20.0995 8.60986C22.1395 8.94986 22.6195 10.4299 21.1495 11.8899L18.6695 14.3699C18.2495 14.7899 18.0195 15.5999 18.1495 16.1799L18.8595 19.2499C19.4195 21.6799 18.1295 22.6199 15.9795 21.3499L12.9895 19.5799C12.4495 19.2599 11.5595 19.2599 11.0095 19.5799L8.01953 21.3499" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M22 2L2 22" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default StarSlashTwotoneIcon;
      