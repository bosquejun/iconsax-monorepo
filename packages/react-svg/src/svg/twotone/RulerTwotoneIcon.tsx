
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const RulerTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M5 17H19C21 17 22 16 22 14V10C22 8 21 7 19 7H5C3 7 2 8 2 10V14C2 16 3 17 5 17Z" stroke={color} stroke-width="1.5" stroke-linecap="round" />
<path opacity="0.4" d="M18 7V12" stroke={color} stroke-width="1.5" stroke-linecap="round" />
<path opacity="0.4" d="M6 7V11" stroke={color} stroke-width="1.5" stroke-linecap="round" />
<path opacity="0.4" d="M10.05 7L10 12" stroke={color} stroke-width="1.5" stroke-linecap="round" />
<path opacity="0.4" d="M14 7V10" stroke={color} stroke-width="1.5" stroke-linecap="round" />
        </svg>
      )
    }
    
    
    export default RulerTwotoneIcon;
      