
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MouseSquareLinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M22 12V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H12" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M20.96 17.84L19.33 18.39C18.88 18.54 18.52 18.89 18.37 19.35L17.82 20.98C17.35 22.39 15.37 22.36 14.93 20.95L13.08 15C12.72 13.82 13.81 12.72 14.98 13.09L20.94 14.94C22.34 15.38 22.36 17.37 20.96 17.84Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default MouseSquareLinearIcon;
      