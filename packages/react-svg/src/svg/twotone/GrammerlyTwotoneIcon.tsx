
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const GrammerlyTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M19.0707 4.95008C23.0407 8.92008 22.9707 15.4 18.8707 19.29C15.0807 22.88 8.93069 22.88 5.13069 19.29C1.02069 15.4 0.950683 8.92008 4.93068 4.95008C8.83068 1.04008 15.1707 1.04008 19.0707 4.95008Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M15.8399 16.0698C13.7199 18.0698 10.2799 18.0698 8.16992 16.0698" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default GrammerlyTwotoneIcon;
      