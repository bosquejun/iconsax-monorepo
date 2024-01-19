
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MiniMusicSqaureBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M2 12.98V15C2 20 4 22 9 22H11" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M22 10V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M15.2701 22.0001C16.0654 22.0001 16.7101 21.3554 16.7101 20.5601C16.7101 19.7648 16.0654 19.1201 15.2701 19.1201C14.4748 19.1201 13.8301 19.7648 13.8301 20.5601C13.8301 21.3554 14.4748 22.0001 15.2701 22.0001Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M21.9992 19.6001V13.9601C21.9992 12.7601 21.2492 12.5901 20.4792 12.8001L17.5892 13.5901C17.0692 13.7301 16.6992 14.1501 16.6992 14.7501V15.7601V16.4401V20.5701" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M20.5591 21.0402C21.3544 21.0402 21.9991 20.3954 21.9991 19.6002C21.9991 18.8049 21.3544 18.1602 20.5591 18.1602C19.7638 18.1602 19.1191 18.8049 19.1191 19.6002C19.1191 20.3954 19.7638 21.0402 20.5591 21.0402Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M16.7109 16.43L22.0009 14.99" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default MiniMusicSqaureBrokenIcon;
      