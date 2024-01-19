
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const CardPosLinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M3.92969 15.8792L15.8797 3.9292" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M11.1013 18.2791L12.3013 17.0791" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M13.793 15.5887L16.183 13.1987" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M3.60127 10.239L10.2413 3.599C12.3613 1.479 13.4213 1.469 15.5213 3.569L20.4313 8.479C22.5313 10.579 22.5213 11.639 20.4013 13.759L13.7613 20.399C11.6413 22.519 10.5813 22.529 8.48127 20.429L3.57127 15.519C1.47127 13.419 1.47127 12.369 3.60127 10.239Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2 21.9985H22" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default CardPosLinearIcon;
      