
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ForwardSquareBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM17.53 9.72L15.96 11.29C15.81 11.44 15.62 11.51 15.43 11.51C15.24 11.51 15.05 11.44 14.9 11.29C14.61 11 14.61 10.52 14.9 10.23L15.16 9.97H10.08C8.8 9.97 7.75 11.01 7.75 12.3C7.75 13.59 8.79 14.63 10.08 14.63H15C15.41 14.63 15.75 14.97 15.75 15.38C15.75 15.79 15.41 16.13 15 16.13H10.08C7.97 16.13 6.25 14.41 6.25 12.3C6.25 10.19 7.97 8.47 10.08 8.47H15.23L14.9 8.15C14.61 7.86 14.61 7.38 14.9 7.09C15.19 6.8 15.67 6.8 15.96 7.09L17.53 8.66C17.82 8.96 17.82 9.43 17.53 9.72Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ForwardSquareBoldIcon;
      