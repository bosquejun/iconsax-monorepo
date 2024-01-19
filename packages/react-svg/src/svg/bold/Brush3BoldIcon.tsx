
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Brush3BoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM10.49 16.72C10.15 17.06 9.7 17.29 9.15 17.36L7.8 17.51C7.06 17.59 6.43 16.96 6.51 16.21L6.66 14.85C6.79 13.64 7.8 12.87 8.87 12.85C8.97 12.84 9.09 12.85 9.2 12.86C9.67 12.92 10.12 13.14 10.5 13.51C10.87 13.88 11.08 14.32 11.14 14.77C11.15 14.88 11.16 14.99 11.16 15.09C11.16 15.71 10.93 16.28 10.49 16.72ZM17.44 7.55C16.72 9.35 15.07 11.71 13.5 13.25C13.27 11.83 12.14 10.71 10.7 10.51C12.24 8.93 14.62 7.26 16.43 6.53C16.75 6.41 17.07 6.5 17.27 6.7C17.47 6.92 17.57 7.23 17.44 7.55Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Brush3BoldIcon;
      