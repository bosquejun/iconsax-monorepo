
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const AttachSquareBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M2 13.02V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12.2009 11.8L10.7908 13.21C10.0108 13.99 10.0108 15.26 10.7908 16.04C11.5708 16.82 12.8408 16.82 13.6208 16.04L15.8409 13.82C17.4009 12.26 17.4009 9.72999 15.8409 8.15999C14.2809 6.59999 11.7508 6.59999 10.1808 8.15999L7.76086 10.58C6.42086 11.92 6.42086 14.09 7.76086 15.43" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default AttachSquareBrokenIcon;
      