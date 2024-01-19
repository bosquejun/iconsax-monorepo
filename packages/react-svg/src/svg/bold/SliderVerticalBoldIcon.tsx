
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const SliderVerticalBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M22 15V9C22 7.34 20.66 6 19 6H5C3.34 6 2 7.34 2 9V15C2 16.66 3.34 18 5 18H19C20.66 18 22 16.66 22 15Z" fill={color} />
<path d="M5.92923 19.5H18.0692C18.3892 19.5 18.6192 19.79 18.5592 20.1C18.2892 21.58 17.4192 22 15.3292 22H8.66923C6.56923 22 5.70923 21.58 5.43923 20.1C5.37923 19.79 5.60923 19.5 5.92923 19.5Z" fill={color} />
<path d="M8.66923 2H15.3292C17.4292 2 18.2892 2.42 18.5592 3.9C18.6192 4.21 18.3792 4.5 18.0692 4.5H5.92923C5.60923 4.5 5.37923 4.21 5.43923 3.9C5.70923 2.42 6.56923 2 8.66923 2Z" fill={color} />
        </svg>
      )
    }
    
    
    export default SliderVerticalBoldIcon;
      