
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const RoutingBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M8.88003 4.59875C8.08003 1.13875 2.87002 1.12875 2.07002 4.59875C1.60002 6.62875 2.89003 8.34875 4.01003 9.41875C4.83003 10.1888 6.12003 10.1888 6.94003 9.41875C8.06003 8.34875 9.34003 6.62875 8.88003 4.59875ZM5.51003 6.19875C4.96003 6.19875 4.51003 5.74875 4.51003 5.19875C4.51003 4.64875 4.95003 4.19875 5.50003 4.19875H5.51003C6.07003 4.19875 6.51003 4.64875 6.51003 5.19875C6.51003 5.74875 6.07003 6.19875 5.51003 6.19875Z" fill={color} />
<path d="M21.91 16.5988C21.11 13.1388 15.88 13.1288 15.07 16.5988C14.6 18.6288 15.89 20.3488 17.02 21.4188C17.84 22.1888 19.14 22.1888 19.96 21.4188C21.09 20.3488 22.38 18.6288 21.91 16.5988ZM18.53 18.1988C17.98 18.1988 17.53 17.7488 17.53 17.1988C17.53 16.6488 17.97 16.1988 18.52 16.1988H18.53C19.08 16.1988 19.53 16.6488 19.53 17.1988C19.53 17.7488 19.08 18.1988 18.53 18.1988Z" fill={color} />
<path d="M11.9995 19.75H9.31945C8.15945 19.75 7.14945 19.05 6.74945 17.97C6.33945 16.89 6.63945 15.7 7.50945 14.93L15.4995 7.94C15.9795 7.52 15.9895 6.95 15.8495 6.56C15.6995 6.17 15.3195 5.75 14.6795 5.75H11.9995C11.5895 5.75 11.2495 5.41 11.2495 5C11.2495 4.59 11.5895 4.25 11.9995 4.25H14.6795C15.8395 4.25 16.8495 4.95 17.2495 6.03C17.6595 7.11 17.3595 8.3 16.4895 9.07L8.49945 16.06C8.01945 16.48 8.00945 17.05 8.14945 17.44C8.29945 17.83 8.67945 18.25 9.31945 18.25H11.9995C12.4095 18.25 12.7495 18.59 12.7495 19C12.7495 19.41 12.4095 19.75 11.9995 19.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default RoutingBoldIcon;
      