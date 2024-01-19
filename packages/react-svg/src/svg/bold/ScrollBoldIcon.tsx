
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ScrollBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM10.13 14.5C10.42 14.79 10.42 15.27 10.13 15.56C9.98 15.71 9.79 15.78 9.6 15.78C9.41 15.78 9.22 15.71 9.07 15.56L6.58 13.07C5.99 12.48 5.99 11.53 6.58 10.94L9.07 8.45C9.36 8.16 9.84 8.16 10.13 8.45C10.42 8.74 10.42 9.22 10.13 9.51L7.64 12L10.13 14.5ZM17.42 13.06L14.93 15.55C14.78 15.7 14.59 15.77 14.4 15.77C14.21 15.77 14.02 15.7 13.87 15.55C13.58 15.26 13.58 14.78 13.87 14.49L16.36 12L13.87 9.5C13.58 9.21 13.58 8.73 13.87 8.44C14.16 8.15 14.64 8.15 14.93 8.44L17.42 10.93C18.01 11.52 18.01 12.48 17.42 13.06Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ScrollBoldIcon;
      