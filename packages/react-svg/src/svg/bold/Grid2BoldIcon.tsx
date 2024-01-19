
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Grid2BoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M11.25 12.75V22H7.81C4.17 22 2 19.83 2 16.19V12.75H11.25Z" fill={color} />
<path d="M22 7.81V11.25H12.75V2H16.19C19.83 2 22 4.17 22 7.81Z" fill={color} />
<path d="M11.25 2V11.25H2V7.81C2 4.17 4.17 2 7.81 2H11.25Z" fill={color} />
<path d="M22 12.75V16.19C22 19.83 19.83 22 16.19 22H12.75V12.75H22Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Grid2BoldIcon;
      