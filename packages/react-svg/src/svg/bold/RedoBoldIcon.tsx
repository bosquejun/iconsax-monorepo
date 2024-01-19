
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const RedoBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM17.53 10.22L15.96 11.79C15.81 11.94 15.62 12.01 15.43 12.01C15.24 12.01 15.05 11.94 14.9 11.79C14.61 11.5 14.61 11.02 14.9 10.73L15.16 10.47H10.08C8.8 10.47 7.75 11.51 7.75 12.8C7.75 14.09 8.79 15.13 10.08 15.13H15C15.41 15.13 15.75 15.47 15.75 15.88C15.75 16.29 15.41 16.63 15 16.63H10.08C7.97 16.63 6.25 14.91 6.25 12.8C6.25 10.69 7.97 8.97 10.08 8.97H15.23L14.9 8.65C14.61 8.36 14.61 7.88 14.9 7.59C15.19 7.3 15.67 7.3 15.96 7.59L17.53 9.16C17.82 9.46 17.82 9.93 17.53 10.22Z" fill={color} />
        </svg>
      )
    }
    
    
    export default RedoBoldIcon;
      