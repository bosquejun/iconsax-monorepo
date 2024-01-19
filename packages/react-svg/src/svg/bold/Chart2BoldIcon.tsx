
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Chart2BoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 19.83 4.17 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V7.81C22 4.17 19.83 2 16.19 2ZM7.75 13.6C7.75 14.01 7.41 14.35 7 14.35C6.59 14.35 6.25 14.01 6.25 13.6V10.4C6.25 9.99 6.59 9.65 7 9.65C7.41 9.65 7.75 9.99 7.75 10.4V13.6ZM12.75 15.34C12.75 15.75 12.41 16.09 12 16.09C11.59 16.09 11.25 15.75 11.25 15.34V8.66C11.25 8.25 11.59 7.91 12 7.91C12.41 7.91 12.75 8.25 12.75 8.66V15.34ZM17.75 13.6C17.75 14.01 17.41 14.35 17 14.35C16.59 14.35 16.25 14.01 16.25 13.6V10.4C16.25 9.99 16.59 9.65 17 9.65C17.41 9.65 17.75 9.99 17.75 10.4V13.6Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Chart2BoldIcon;
      