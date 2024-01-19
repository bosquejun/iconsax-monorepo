
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const NextLinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M3.76001 7.22005V16.7901C3.76001 18.7501 5.89 19.98 7.59 19L11.74 16.61L15.89 14.21C17.59 13.23 17.59 10.78 15.89 9.80004L11.74 7.40004L7.59 5.01006C5.89 4.03006 3.76001 5.25005 3.76001 7.22005Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M20.24 18.1801V5.82007" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default NextLinearIcon;
      