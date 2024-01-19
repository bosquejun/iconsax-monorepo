
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Grid3BoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M16.19 2H12.75V8V8.75V13.75H22V8.75V8V7.81C22 4.17 19.83 2 16.19 2Z" fill={color} />
<path d="M2 10.25V15.25V15.75V16.19C2 19.83 4.17 22 7.81 22H11.25V15.75V15.25V10.25H2Z" fill={color} />
<path d="M11.25 2V8.75H2V7.81C2 4.17 4.17 2 7.81 2H11.25Z" fill={color} />
<path d="M22 15.25V16.19C22 19.83 19.83 22 16.19 22H12.75V15.25H22Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Grid3BoldIcon;
      