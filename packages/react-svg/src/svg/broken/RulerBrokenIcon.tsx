
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const RulerBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M22 10C22 8 21 7 19 7H5C3 7 2 8 2 10V14C2 16 3 17 5 17H19C21 17 22 16 22 14" stroke={color} stroke-width="1.5" stroke-linecap="round" />
<path d="M18 7V12" stroke={color} stroke-width="1.5" stroke-linecap="round" />
<path d="M6 7V11" stroke={color} stroke-width="1.5" stroke-linecap="round" />
<path d="M10.05 7L10 12" stroke={color} stroke-width="1.5" stroke-linecap="round" />
<path d="M14 7V10" stroke={color} stroke-width="1.5" stroke-linecap="round" />
        </svg>
      )
    }
    
    
    export default RulerBrokenIcon;
      