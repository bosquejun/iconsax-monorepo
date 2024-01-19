
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const RotateRight1OutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M16.75 22.75H12.25C8.1 22.75 6.25 20.9 6.25 16.75V12.25C6.25 8.1 8.1 6.25 12.25 6.25H16.75C20.9 6.25 22.75 8.1 22.75 12.25V16.75C22.75 20.9 20.9 22.75 16.75 22.75ZM12.25 7.75C8.93 7.75 7.75 8.93 7.75 12.25V16.75C7.75 20.07 8.93 21.25 12.25 21.25H16.75C20.07 21.25 21.25 20.07 21.25 16.75V12.25C21.25 8.93 20.07 7.75 16.75 7.75H12.25Z" fill={color} />
<path d="M2 9.75C1.59 9.75 1.25 9.41 1.25 9C1.25 4.73 4.73 1.25 9 1.25C9.27 1.25 9.52 1.4 9.65 1.63C9.78 1.86 9.78 2.15 9.64 2.38L8.59 4.14C8.38 4.49 7.92 4.61 7.56 4.39C7.21 4.18 7.09 3.72 7.31 3.36L7.58 2.91C4.81 3.56 2.75 6.04 2.75 9C2.75 9.41 2.41 9.75 2 9.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default RotateRight1OutlineIcon;
      