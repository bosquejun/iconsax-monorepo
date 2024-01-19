
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const CardPosBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M3.92969 15.8799L15.8797 3.92993" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M11.0996 18.2801L12.2996 17.0801" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M13.7891 15.59L16.1791 13.2" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M20.4295 8.47998C22.5295 10.58 22.5195 11.64 20.3995 13.76L13.7595 20.4C11.6395 22.52 10.5795 22.53 8.47949 20.43L3.56949 15.52C1.46949 13.42 1.47949 12.36 3.59949 10.24L10.2395 3.59998C12.3595 1.47998 13.4195 1.46998 15.5195 3.56998L17.4195 5.46998" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2 22H22" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default CardPosBrokenIcon;
      