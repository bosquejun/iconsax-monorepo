
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const SliderHorizontalBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M9 22H15C16.66 22 18 20.66 18 19V5C18 3.34 16.66 2 15 2H9C7.34 2 6 3.34 6 5V19C6 20.66 7.34 22 9 22Z" fill={color} />
<path d="M4.5 5.92923V18.0692C4.5 18.3892 4.21 18.6192 3.9 18.5592C2.42 18.2892 2 17.4292 2 15.3292V8.66923C2 6.56923 2.42 5.70923 3.9 5.43923C4.21 5.37923 4.5 5.60923 4.5 5.92923Z" fill={color} />
<path d="M22 8.66923V15.3292C22 17.4292 21.58 18.2892 20.1 18.5592C19.79 18.6192 19.5 18.3792 19.5 18.0692V5.92923C19.5 5.60923 19.79 5.37923 20.1 5.43923C21.58 5.70923 22 6.56923 22 8.66923Z" fill={color} />
        </svg>
      )
    }
    
    
    export default SliderHorizontalBoldIcon;
      