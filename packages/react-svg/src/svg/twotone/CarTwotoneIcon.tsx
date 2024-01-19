
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const CarTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M15.51 2.83008H8.49C6 2.83008 5.45 4.07008 5.13 5.59008L4 11.0001H20L18.87 5.59008C18.55 4.07008 18 2.83008 15.51 2.83008Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M21.9907 19.82C22.1007 20.99 21.1607 22 19.9607 22H18.0807C17.0007 22 16.8507 21.54 16.6607 20.97L16.4607 20.37C16.1807 19.55 16.0007 19 14.5607 19H9.44071C8.00071 19 7.79071 19.62 7.54071 20.37L7.34071 20.97C7.15071 21.54 7.00071 22 5.92071 22H4.04071C2.84071 22 1.90071 20.99 2.01071 19.82L2.57071 13.73C2.71071 12.23 3.00071 11 5.62071 11H18.3807C21.0007 11 21.2907 12.23 21.4307 13.73L21.9907 19.82Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M4 8H3" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M21 8H20" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M6 15H9" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M15 15H18" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default CarTwotoneIcon;
      