
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Maximize2LinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M15 2H17.5C19.99 2 22 4.01 22 6.5V9" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M22 16V17.5C22 19.99 19.99 22 17.5 22H16" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M9 22H6.5C4.01 22 2 19.99 2 17.5V15" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M18 12V10M6 12H12H18H6ZM6 12V10V12ZM6 12V14V12ZM18 12V14V12Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12 6H14M12 18V6V18ZM12 18H14H12ZM12 18H10H12ZM12 6H10H12Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default Maximize2LinearIcon;
      