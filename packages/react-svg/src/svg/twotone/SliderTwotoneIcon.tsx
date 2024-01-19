
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const SliderTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M15 22H9C6.5 22 5 20.2 5 18V6C5 3.8 6.5 2 9 2H15C17.5 2 19 3.8 19 6V18C19 20.2 17.5 22 15 22Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M5 16.0098H19" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M2 4V20" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M22 4V20" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default SliderTwotoneIcon;
      