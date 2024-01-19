
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Radar2BoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 19.75C7.73 19.75 4.25 16.27 4.25 12C4.25 10.64 4.61 9.31 5.28 8.14C5.48 7.78 5.94 7.66 6.3 7.86L12.37 11.35C12.73 11.56 12.85 12.01 12.65 12.37C12.44 12.73 11.99 12.85 11.63 12.65L8.72 10.98C8.62 11.31 8.55 11.65 8.55 12C8.55 13.9 10.1 15.45 12 15.45C13.9 15.45 15.45 13.9 15.45 12C15.45 10.1 13.9 8.55 12 8.55C11.49 8.55 10.99 8.66 10.53 8.88C10.15 9.06 9.71 8.9 9.53 8.52C9.35 8.15 9.51 7.7 9.89 7.52C10.55 7.21 11.26 7.05 12 7.05C14.73 7.05 16.95 9.27 16.95 12C16.95 14.73 14.73 16.95 12 16.95C9.27 16.95 7.05 14.73 7.05 12C7.05 11.39 7.17 10.78 7.39 10.21L6.24 9.56C5.92 10.33 5.75 11.16 5.75 12C5.75 15.45 8.55 18.25 12 18.25C15.45 18.25 18.25 15.45 18.25 12C18.25 8.55 15.45 5.75 12 5.75C10.64 5.75 9.34 6.18 8.25 7C7.92 7.25 7.45 7.18 7.2 6.85C6.95 6.52 7.02 6.05 7.35 5.8C8.7 4.79 10.31 4.25 12 4.25C16.27 4.25 19.75 7.73 19.75 12C19.75 16.27 16.27 19.75 12 19.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Radar2BoldIcon;
      