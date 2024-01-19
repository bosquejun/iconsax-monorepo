
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MusicSquareLinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M8.41998 17.11C9.28707 17.11 9.98999 16.4071 9.98999 15.54C9.98999 14.6729 9.28707 13.97 8.41998 13.97C7.5529 13.97 6.84998 14.6729 6.84998 15.54C6.84998 16.4071 7.5529 17.11 8.41998 17.11Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M15.75 14.49V8.34997C15.75 7.03997 14.93 6.86002 14.1 7.09002L10.96 7.95001C10.39 8.11001 10 8.56002 10 9.21002V10.31V11.05V15.55" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M14.18 16.0599C15.0471 16.0599 15.75 15.357 15.75 14.4899C15.75 13.6228 15.0471 12.9199 14.18 12.9199C13.3129 12.9199 12.61 13.6228 12.61 14.4899C12.61 15.357 13.3129 16.0599 14.18 16.0599Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M9.98999 11.04L15.75 9.46997" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default MusicSquareLinearIcon;
      