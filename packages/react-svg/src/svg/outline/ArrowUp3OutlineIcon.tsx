
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ArrowUp3OutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M18.0691 10.3199C17.8791 10.3199 17.6891 10.2499 17.5391 10.0999L11.9991 4.55994L6.45914 10.0999C6.16914 10.3899 5.68914 10.3899 5.39914 10.0999C5.10914 9.80994 5.10914 9.32994 5.39914 9.03994L11.4691 2.96994C11.7591 2.67994 12.2391 2.67994 12.5291 2.96994L18.5991 9.03994C18.8891 9.32994 18.8891 9.80994 18.5991 10.0999C18.4591 10.2499 18.2591 10.3199 18.0691 10.3199Z" fill={color} />
<path d="M12 21.2499C11.59 21.2499 11.25 20.9099 11.25 20.4999V3.66992C11.25 3.25992 11.59 2.91992 12 2.91992C12.41 2.91992 12.75 3.25992 12.75 3.66992V20.4999C12.75 20.9099 12.41 21.2499 12 21.2499Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ArrowUp3OutlineIcon;
      