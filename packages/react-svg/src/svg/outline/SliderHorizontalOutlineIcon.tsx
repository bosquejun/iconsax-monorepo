
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const SliderHorizontalOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M14 22.25H10C6.7 22.25 4.71 21.59 4.34 18.24C4.28 17.79 4.25 17.25 4.25 16.5V7.5C4.25 6.75 4.28 6.2 4.35 5.73C4.71 2.41 6.7 1.75 10 1.75H14C17.3 1.75 19.29 2.41 19.66 5.76C19.72 6.21 19.75 6.75 19.75 7.5V16.5C19.75 17.25 19.72 17.8 19.65 18.27C19.29 21.59 17.3 22.25 14 22.25ZM10 3.25C6.69 3.25 6.06 3.92 5.83 5.92C5.78 6.34 5.75 6.82 5.75 7.5V16.5C5.75 17.18 5.78 17.66 5.83 18.05C6.05 20.08 6.69 20.75 10 20.75H14C17.31 20.75 17.94 20.08 18.17 18.08C18.23 17.66 18.25 17.18 18.25 16.5V7.5C18.25 6.82 18.22 6.34 18.17 5.95C17.95 3.92 17.31 3.25 14 3.25H10Z" fill={color} />
<path d="M2 20.25C1.59 20.25 1.25 19.91 1.25 19.5V4.5C1.25 4.09 1.59 3.75 2 3.75C2.41 3.75 2.75 4.09 2.75 4.5V19.5C2.75 19.91 2.41 20.25 2 20.25Z" fill={color} />
<path d="M22 19.75C21.59 19.75 21.25 19.41 21.25 19V4C21.25 3.59 21.59 3.25 22 3.25C22.41 3.25 22.75 3.59 22.75 4V19C22.75 19.41 22.41 19.75 22 19.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default SliderHorizontalOutlineIcon;
      