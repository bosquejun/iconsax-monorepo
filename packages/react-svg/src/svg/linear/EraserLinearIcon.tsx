
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const EraserLinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M6.98994 15.08L8.92993 17.02C9.56993 17.66 10.6299 17.66 11.2699 17.02L17.0199 11.27C17.6599 10.63 17.6599 9.57 17.0199 8.93L15.0799 6.99001C14.4399 6.35001 13.3799 6.35001 12.7399 6.99001L6.98994 12.74C6.33994 13.38 6.33994 14.43 6.98994 15.08Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M9.31006 10.4199L13.5801 14.6899" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default EraserLinearIcon;
      