
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const GlassBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M8.36077 7.62L8.75077 6.74H8.45077C7.80077 6.74 7.20077 6.48 6.77077 6.05C6.33077 5.62 6.07077 5.02 6.07077 4.37C6.07077 3.07 7.13077 2 8.44077 2H15.5508C16.2108 2 16.8008 2.27 17.2308 2.7C17.7908 3.26 18.0708 4.08 17.8608 4.95C17.5908 6.03 16.5508 6.74 15.4408 6.74H15.2808L19.5008 16.4C20.8508 19.48 19.9708 22 15.8308 22H8.16077C3.98077 22 3.14077 19.47 4.50077 16.39L6.57077 11.69" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M5.93945 13.1201C5.93945 13.1201 8.99945 13.0001 11.9995 14.0001C14.9995 15.0001 17.8295 13.1101 17.8295 13.1101" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default GlassBrokenIcon;
      