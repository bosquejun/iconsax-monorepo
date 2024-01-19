
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Paperclip2BoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.37 14.63L14.15 16.85C13.61 17.39 12.91 17.65 12.21 17.65C11.51 17.65 10.8 17.38 10.27 16.85C9.2 15.78 9.2 14.03 10.27 12.96L11.68 11.55C11.97 11.26 12.45 11.26 12.74 11.55C13.03 11.84 13.03 12.32 12.74 12.61L11.33 14.02C10.84 14.51 10.84 15.3 11.33 15.79C11.82 16.28 12.61 16.28 13.1 15.79L15.32 13.57C15.93 12.96 16.27 12.14 16.27 11.27C16.27 10.4 15.93 9.59 15.32 8.97C14.09 7.74 11.95 7.74 10.72 8.97L8.29 11.4C7.25 12.44 7.25 14.14 8.29 15.19C8.58 15.48 8.58 15.96 8.29 16.25C8 16.54 7.52 16.54 7.23 16.25C5.6 14.62 5.6 11.97 7.23 10.34L9.65 7.92C10.55 7.02 11.74 6.53 13.01 6.53C14.28 6.53 15.47 7.02 16.37 7.92C17.27 8.82 17.76 10.01 17.76 11.28C17.76 12.55 17.27 13.74 16.37 14.63Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Paperclip2BoldIcon;
      