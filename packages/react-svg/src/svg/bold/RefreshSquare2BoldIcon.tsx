
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const RefreshSquare2BoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM5.25 11.89C5.28 10.13 5.98 8.47 7.22 7.23C8.5 5.95 10.2 5.25 12 5.25C13.8 5.25 15.5 5.95 16.77 7.23C16.8 7.26 16.83 7.3 16.86 7.34V6.48C16.86 6.07 17.2 5.73 17.61 5.73C18.02 5.73 18.36 6.07 18.36 6.48V9.13C18.36 9.54 18.02 9.88 17.61 9.88H14.96C14.55 9.88 14.21 9.54 14.21 9.13C14.21 8.72 14.55 8.38 14.96 8.38H15.79C15.76 8.35 15.74 8.32 15.71 8.29C14.72 7.3 13.4 6.75 12 6.75C10.6 6.75 9.28 7.3 8.29 8.29C7.32 9.26 6.78 10.55 6.76 11.92C6.75 12.32 6.41 12.65 6 12.65H5.99C5.58 12.65 5.25 12.3 5.25 11.89ZM16.77 16.77C15.5 18.04 13.8 18.75 12 18.75C10.2 18.75 8.5 18.05 7.23 16.77C7.2 16.74 7.17 16.7 7.14 16.66V17.51C7.14 17.92 6.8 18.26 6.39 18.26C5.98 18.26 5.64 17.92 5.64 17.51V14.86C5.64 14.45 5.98 14.11 6.39 14.11H9.04C9.45 14.11 9.79 14.45 9.79 14.86C9.79 15.27 9.45 15.61 9.04 15.61H8.21C8.24 15.64 8.26 15.67 8.29 15.7C9.28 16.69 10.6 17.24 12 17.24C13.4 17.24 14.72 16.69 15.71 15.7C16.69 14.72 17.24 13.41 17.24 12.01C17.24 11.6 17.58 11.26 17.99 11.26C18.4 11.26 18.74 11.6 18.74 12.01C18.74 13.82 18.04 15.51 16.77 16.77Z" fill={color} />
        </svg>
      )
    }
    
    
    export default RefreshSquare2BoldIcon;
      