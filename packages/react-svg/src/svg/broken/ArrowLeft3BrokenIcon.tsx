
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ArrowLeft3BrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12.7803 6.30992C15.6503 4.65992 18.0003 6.00993 18.0003 9.32993V11.9999V14.6699C18.0003 17.9799 15.6503 19.3399 12.7803 17.6799L10.4703 16.3399L8.16031 14.9999C5.29031 13.3399 5.29031 10.6299 8.16031 8.96993" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default ArrowLeft3BrokenIcon;
      