
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const AttachCircleBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12.2009 11.8L10.7908 13.21C10.0108 13.99 10.0108 15.26 10.7908 16.04C11.5708 16.82 12.8408 16.82 13.6208 16.04L15.8409 13.82C17.4009 12.26 17.4009 9.72999 15.8409 8.15999C14.2809 6.59999 11.7508 6.59999 10.1808 8.15999L7.76086 10.58C6.42086 11.92 6.42086 14.09 7.76086 15.43" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.19997 2.30001 7.96997 2.85001" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default AttachCircleBrokenIcon;
      