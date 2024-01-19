
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Eraser1TwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M9 22H21" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2.9107 17.5802L6.42071 21.0902C7.59071 22.2602 9.5007 22.2602 10.6607 21.0902L21.0908 10.6602C22.2608 9.49021 22.2608 7.58021 21.0908 6.42021L17.5807 2.91021C16.4107 1.74021 14.5008 1.74021 13.3408 2.91021L2.9107 13.3402C1.7407 14.5002 1.7407 16.4102 2.9107 17.5802Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default Eraser1TwotoneIcon;
      