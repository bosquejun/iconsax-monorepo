
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const SizeBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M21.9707 5.85V9.15C21.9707 11.9 20.8707 13 18.1207 13H16.9707V12.25C16.9707 8.5 15.4707 7 11.7207 7H10.9707V5.85C10.9707 3.1 12.0707 2 14.8207 2H18.1207C20.8707 2 21.9707 3.1 21.9707 5.85Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M1.9707 12.25C1.9707 8.5 3.4707 7 7.2207 7H11.7207C15.4707 7 16.9707 8.5 16.9707 12.25V16.75C16.9707 20.5 15.4707 22 11.7207 22H7.2207C3.4707 22 1.9707 20.5 1.9707 16.75V16.01" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default SizeBrokenIcon;
      