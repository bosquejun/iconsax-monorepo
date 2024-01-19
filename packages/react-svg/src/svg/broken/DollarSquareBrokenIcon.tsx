
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const DollarSquareBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M8.66992 14.3301C8.66992 15.6201 9.65992 16.6601 10.8899 16.6601H13.3999C14.4699 16.6601 15.3399 15.7501 15.3399 14.6301C15.3399 13.4101 14.8099 12.9801 14.0199 12.7001L9.98992 11.3001C9.19992 11.0201 8.66992 10.5901 8.66992 9.37009C8.66992 8.25009 9.53992 7.34009 10.6099 7.34009H13.1199C14.3499 7.34009 15.3399 8.38009 15.3399 9.67009" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12 6V18" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2 9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22H9C4 22 2 20 2 15V13.03" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default DollarSquareBrokenIcon;
      