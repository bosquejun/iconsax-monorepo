
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ArrowRight3LinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M6 11.9999V9.32992C6 6.01992 8.35 4.65992 11.22 6.31992L13.53 7.65992L15.84 8.99992C18.71 10.6599 18.71 13.3699 15.84 15.0299L13.53 16.3699L11.22 17.7099C8.35 19.3399 6 17.9899 6 14.6699V11.9999Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default ArrowRight3LinearIcon;
      