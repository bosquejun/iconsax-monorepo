
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Frame3TwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M19.2598 18.9V7.1C19.2598 5.6 18.6198 5 17.0298 5H15.9898C14.3998 5 13.7598 5.6 13.7598 7.1V18.9" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M5.25977 18.9V12.1C5.25977 10.6 5.89977 10 7.48977 10H8.52977C10.1198 10 10.7598 10.6 10.7598 12.1V18.9" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2 19H22" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default Frame3TwotoneIcon;
      