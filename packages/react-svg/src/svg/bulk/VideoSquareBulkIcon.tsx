
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const VideoSquareBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill={color} />
<path d="M9.09961 12V10.52C9.09961 8.60999 10.4496 7.83999 12.0996 8.78999L13.3796 9.52999L14.6596 10.27C16.3096 11.22 16.3096 12.78 14.6596 13.73L13.3796 14.47L12.0996 15.21C10.4496 16.16 9.09961 15.38 9.09961 13.48V12Z" fill={color} />
        </svg>
      )
    }
    
    
    export default VideoSquareBulkIcon;
      