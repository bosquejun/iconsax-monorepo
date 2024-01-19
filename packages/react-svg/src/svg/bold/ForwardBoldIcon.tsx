
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ForwardBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M2 8.34032V15.6603C2 17.1603 3.63 18.1003 4.93 17.3503L8.1 15.5203L11.27 13.6903L11.76 13.4103V10.5903L11.27 10.3103L8.1 8.48032L4.93 6.65032C3.63 5.90032 2 6.84032 2 8.34032Z" fill={color} />
<path d="M11.7617 8.34032V15.6603C11.7617 17.1603 13.3917 18.1003 14.6817 17.3503L17.8617 15.5203L21.0317 13.6903C22.3217 12.9403 22.3217 11.0603 21.0317 10.3103L17.8617 8.48032L14.6817 6.65032C13.3917 5.90032 11.7617 6.84032 11.7617 8.34032Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ForwardBoldIcon;
      