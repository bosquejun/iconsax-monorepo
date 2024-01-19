
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const EraserBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM12.52 15.75L11.26 17.01C10.62 17.66 9.57 17.66 8.92 17.01L6.99 15.08C6.34 14.43 6.35 13.39 6.99 12.74L8.26 11.48C8.46 11.29 8.77 11.29 8.97 11.48L12.53 15.04C12.72 15.24 12.72 15.56 12.52 15.75ZM17.01 11.26L13.93 14.34C13.73 14.54 13.42 14.54 13.22 14.34L9.66 10.78C9.46 10.58 9.46 10.27 9.66 10.07L12.74 6.99C13.38 6.34 14.43 6.34 15.08 6.99L17.01 8.92C17.66 9.57 17.66 10.62 17.01 11.26Z" fill={color} />
        </svg>
      )
    }
    
    
    export default EraserBoldIcon;
      