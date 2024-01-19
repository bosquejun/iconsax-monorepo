
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MusicSquareSearchTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12.35 21H8.64999C3.89999 21 2 19.1 2 14.35V8.65002C2 3.90002 3.89999 2 8.64999 2H14.35C19.1 2 21 3.90002 21 8.65002V12.35" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M17.9402 21.2799C19.7075 21.2799 21.1402 19.8472 21.1402 18.0799C21.1402 16.3126 19.7075 14.8799 17.9402 14.8799C16.1729 14.8799 14.7402 16.3126 14.7402 18.0799C14.7402 19.8472 16.1729 21.2799 17.9402 21.2799Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M21.7402 21.8799L20.7402 20.8799" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default MusicSquareSearchTwotoneIcon;
      