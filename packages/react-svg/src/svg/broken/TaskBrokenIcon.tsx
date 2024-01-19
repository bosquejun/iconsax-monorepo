
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const TaskBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M11 19.5H21" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M20 12.5H21" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M11 12.5H16.49" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M11 5.5H21" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M3 5.5L4 6.5L7 3.5" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M3 12.5L4 13.5L7 10.5" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M3 19.5L4 20.5L7 17.5" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default TaskBrokenIcon;
      