
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const SliderBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M18 16.0117C18.55 16.0117 19 16.4617 19 17.0117V18.0017C19 20.2017 17.5 22.0017 15 22.0017H9C6.5 22.0017 5 20.2017 5 18.0017V17.0117C5 16.4617 5.45 16.0117 6 16.0117H18Z" fill={color} />
<path d="M19 6V13.5C19 14.05 18.55 14.5 18 14.5H6C5.45 14.5 5 14.05 5 13.5V6C5 3.8 6.5 2 9 2H15C17.5 2 19 3.8 19 6Z" fill={color} />
<path d="M3 20.75C2.59 20.75 2.25 20.41 2.25 20V4C2.25 3.59 2.59 3.25 3 3.25C3.41 3.25 3.75 3.59 3.75 4V20C3.75 20.41 3.41 20.75 3 20.75Z" fill={color} />
<path d="M21 20.75C20.59 20.75 20.25 20.41 20.25 20V4C20.25 3.59 20.59 3.25 21 3.25C21.41 3.25 21.75 3.59 21.75 4V20C21.75 20.41 21.41 20.75 21 20.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default SliderBoldIcon;
      