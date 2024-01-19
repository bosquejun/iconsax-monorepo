
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const UndoBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM13.92 16.63H9C8.59 16.63 8.25 16.29 8.25 15.88C8.25 15.47 8.59 15.13 9 15.13H13.92C15.2 15.13 16.25 14.09 16.25 12.8C16.25 11.51 15.21 10.47 13.92 10.47H8.85L9.11 10.73C9.4 11.02 9.4 11.5 9.11 11.79C8.96 11.94 8.77 12.01 8.58 12.01C8.39 12.01 8.2 11.94 8.05 11.79L6.48 10.22C6.19 9.93 6.19 9.45 6.48 9.16L8.05 7.59C8.34 7.3 8.82 7.3 9.11 7.59C9.4 7.88 9.4 8.36 9.11 8.65L8.77 8.98H13.92C16.03 8.98 17.75 10.7 17.75 12.81C17.75 14.92 16.03 16.63 13.92 16.63Z" fill={color} />
        </svg>
      )
    }
    
    
    export default UndoBoldIcon;
      