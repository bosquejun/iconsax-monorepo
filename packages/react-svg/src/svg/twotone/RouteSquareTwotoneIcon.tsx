
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const RouteSquareTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M17.3509 9.04979L15.0109 16.5898C14.4509 18.3798 11.9409 18.4098 11.3509 16.6298L10.651 14.5598C10.461 13.9898 10.0109 13.5298 9.44095 13.3498L7.36095 12.6498C5.59095 12.0598 5.62095 9.5298 7.41095 8.9898L14.951 6.63979C16.431 6.18979 17.8209 7.57979 17.3509 9.04979Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default RouteSquareTwotoneIcon;
      