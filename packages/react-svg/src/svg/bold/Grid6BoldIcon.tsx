
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Grid6BoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M22 7.74922H9.75V1.94922H16.19C19.83 1.94922 22 4.11922 22 7.74922Z" fill={color} />
<path d="M22 16.25C21.95 19.82 19.79 21.95 16.19 21.95H9.75V16.25H22Z" fill={color} />
<path d="M8.25 1.94922V21.9492H7.81C4.17 21.9492 2 19.7792 2 16.1392V7.75922C2 4.11922 4.17 1.94922 7.81 1.94922H8.25Z" fill={color} />
<path d="M22 9.25H9.75V14.75H22V9.25Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Grid6BoldIcon;
      