
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Data2BrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M7 8H4C2.9 8 2 7.1 2 6V4C2 2.9 2.9 2 4 2H7C8.1 2 9 2.9 9 4V6C9 7.1 8.1 8 7 8Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M20.8 7H17.2C16.54 7 16 6.45999 16 5.79999V4.20001C16 3.54001 16.54 3 17.2 3H20.8C21.46 3 22 3.54001 22 4.20001V5.79999C22 6.45999 21.46 7 20.8 7Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M20.8 14.5H17.2C16.54 14.5 16 13.96 16 13.3V11.7C16 11.04 16.54 10.5 17.2 10.5H20.8C21.46 10.5 22 11.04 22 11.7V13.3C22 13.96 21.46 14.5 20.8 14.5Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M9 5H16" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12.5 16.3599V17.9999C12.5 19.0999 13.4 19.9999 14.5 19.9999H16" fill={color} />
<path d="M12.5 16.3599V17.9999C12.5 19.0999 13.4 19.9999 14.5 19.9999H16" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12.5 5V12.32" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M16 12.5H12.5" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M20.8 22H17.2C16.54 22 16 21.46 16 20.8V19.2C16 18.54 16.54 18 17.2 18H20.8C21.46 18 22 18.54 22 19.2V20.8C22 21.46 21.46 22 20.8 22Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default Data2BrokenIcon;
      