
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const TextBlockBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM17.67 9.22C17.48 9.59 17.04 9.74 16.66 9.56C15.43 8.94 14.1 8.6 12.75 8.5V16.29C12.75 16.7 12.41 17.04 12 17.04C11.59 17.04 11.25 16.7 11.25 16.29V8.5C9.9 8.6 8.57 8.94 7.34 9.56C7.23 9.61 7.11 9.63 7 9.63C6.73 9.63 6.46 9.48 6.33 9.22C6.14 8.85 6.29 8.4 6.66 8.21C10 6.54 13.99 6.54 17.33 8.21C17.71 8.4 17.86 8.85 17.67 9.22Z" fill={color} />
        </svg>
      )
    }
    
    
    export default TextBlockBoldIcon;
      