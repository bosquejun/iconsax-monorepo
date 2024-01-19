
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ArrowUp2BrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M17.6897 12.7801C19.3497 15.6501 17.9897 18.0001 14.6797 18.0001H11.9997H9.32968C6.01968 18.0001 4.65968 15.6501 6.31968 12.7801L7.65968 10.4701L8.99968 8.16007C10.6597 5.29007 13.3697 5.29007 15.0297 8.16007" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default ArrowUp2BrokenIcon;
      