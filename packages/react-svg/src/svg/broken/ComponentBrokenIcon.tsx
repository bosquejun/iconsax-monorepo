
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ComponentBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M6.73976 18.24L3.05977 14.56C1.65977 13.16 1.65977 10.86 3.05977 9.45002L9.44978 3.06001C10.8498 1.66001 13.1498 1.66001 14.5598 3.06001L20.9498 9.45002C22.3498 10.85 22.3498 13.15 20.9498 14.56L14.5598 20.95C13.1598 22.35 10.8598 22.35 9.44978 20.95" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default ComponentBrokenIcon;
      