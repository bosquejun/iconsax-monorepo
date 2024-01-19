
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const BlurBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M12.6103 2.21C12.2503 1.93 11.7503 1.93 11.3903 2.21C9.49032 3.66 3.88028 8.39 3.91028 13.9C3.91028 18.36 7.54031 22 12.0103 22C16.4803 22 20.1103 18.37 20.1103 13.91C20.1203 8.48 14.5003 3.67 12.6103 2.21Z" fill={color} />
<path d="M20.09 14.2C20.07 14.81 19.98 15.41 19.82 15.99L12.75 19.43V21.97C12.5 21.99 12.25 22 12 22C11.75 22 11.5 21.99 11.25 21.97V2.31C11.3 2.27 11.34 2.24 11.38 2.21C11.75 1.93 12.25 1.93 12.61 2.21C12.65 2.24 12.7 2.28 12.75 2.32V7.76L16.53 5.92C16.86 6.3 17.17 6.69 17.48 7.1C17.44 7.14 17.4 7.17 17.35 7.19L12.75 9.43V12.76L19.04 9.7C19.05 9.7 19.05 9.69 19.06 9.69C19.28 10.14 19.47 10.6 19.62 11.08L12.75 14.43V17.76L19.37 14.54L20.09 14.2Z" fill={color} />
        </svg>
      )
    }
    
    
    export default BlurBulkIcon;
      