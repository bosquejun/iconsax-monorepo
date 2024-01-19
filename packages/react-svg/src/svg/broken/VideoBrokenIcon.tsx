
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const VideoBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M2 7.79008C2 4.63008 3.05 3.58008 6.21 3.58008H12.53C15.69 3.58008 16.74 4.63008 16.74 7.79008V16.2101C16.74 19.3701 15.69 20.4201 12.53 20.4201H6.21C3.05 20.4201 2 18.3201 2 16.2101V12.1201" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M19.5202 17.0999L16.7402 15.1499V8.83989L19.5202 6.88989C20.8802 5.93989 22.0002 6.51989 22.0002 8.18989V15.8099C22.0002 17.4799 20.8802 18.0599 19.5202 17.0999Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M13 9.5C13 8.67 12.33 8 11.5 8C10.67 8 10 8.67 10 9.5C10 10.33 10.67 11 11.5 11" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default VideoBrokenIcon;
      