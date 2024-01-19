
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const SliderVertical1BoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M18.9405 3.5H5.06055C4.65055 3.5 4.31055 3.16 4.31055 2.75C4.31055 2.34 4.65055 2 5.06055 2H18.9405C19.3505 2 19.6905 2.34 19.6905 2.75C19.6905 3.16 19.3505 3.5 18.9405 3.5Z" fill={color} />
<path d="M18.9405 22H5.06055C4.65055 22 4.31055 21.66 4.31055 21.25C4.31055 20.84 4.65055 20.5 5.06055 20.5H18.9405C19.3505 20.5 19.6905 20.84 19.6905 21.25C19.6905 21.66 19.3505 22 18.9405 22Z" fill={color} />
<path d="M2.75 8V16C2.75 17.66 4.09 19 5.75 19H18.25C19.91 19 21.25 17.66 21.25 16V8C21.25 6.34 19.91 5 18.25 5H5.75C4.09 5 2.75 6.34 2.75 8Z" fill={color} />
        </svg>
      )
    }
    
    
    export default SliderVertical1BoldIcon;
      