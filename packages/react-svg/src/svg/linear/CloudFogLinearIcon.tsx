
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const CloudFogLinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M4.28989 11.62C1.08989 2.69002 14.6199 -0.869977 16.1699 8.50002C18.0999 8.74002 19.5099 10.02 20.1999 11.62" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M14.54 8.93002C15.06 8.67002 15.6301 8.53002 16.2101 8.52002" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M4 15.03H20" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M6 18.03H18" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M9 21.03H15" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default CloudFogLinearIcon;
      