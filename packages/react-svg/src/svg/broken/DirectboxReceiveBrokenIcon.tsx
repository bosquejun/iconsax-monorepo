
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const DirectboxReceiveBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12 2V8L14 6" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12 8L10 6" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12 22H16C20 22 21 19.76 21 17V16C21 13.79 21 12 17 12C16 12 15.72 12.21 15.2 12.6L14.18 13.68C13 14.94 11 14.94 9.81 13.68L8.8 12.6C8.28 12.21 8 12 7 12C3 12 3 13.79 3 16V17C3 19.76 3 22 8 22" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M5 12V8.00004C5 5.99004 5 4.33004 8 4.04004" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M19 12V8.00004C19 5.99004 19 4.33004 16 4.04004" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default DirectboxReceiveBrokenIcon;
      