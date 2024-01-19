
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const PercentageCircleBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM8.73 7.66C9.54 7.66 10.21 8.32 10.21 9.14C10.21 9.95 9.55 10.62 8.73 10.62C7.92 10.62 7.25 9.96 7.25 9.14C7.25 8.32 7.91 7.66 8.73 7.66ZM8.85 15.8C8.7 15.95 8.51 16.02 8.32 16.02C8.13 16.02 7.94 15.95 7.79 15.8C7.5 15.51 7.5 15.03 7.79 14.74L14.34 8.19C14.63 7.9 15.11 7.9 15.4 8.19C15.69 8.48 15.69 8.96 15.4 9.25L8.85 15.8ZM15.27 16.34C14.46 16.34 13.79 15.68 13.79 14.86C13.79 14.05 14.45 13.38 15.27 13.38C16.08 13.38 16.75 14.04 16.75 14.86C16.75 15.68 16.09 16.34 15.27 16.34Z" fill={color} />
        </svg>
      )
    }
    
    
    export default PercentageCircleBoldIcon;
      