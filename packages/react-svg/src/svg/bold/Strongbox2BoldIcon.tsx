
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Strongbox2BoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM19 8.24C19 8.79 18.55 9.24 18 9.24H16C15.59 9.24 15.25 9.58 15.25 9.99C15.25 10.41 15.59 10.74 16 10.74H18C18.55 10.74 19 11.19 19 11.74V12.25C19 12.8 18.55 13.25 18 13.25H16C15.59 13.25 15.25 13.59 15.25 14C15.25 14.41 15.59 14.75 16 14.75H18C18.55 14.75 19 15.2 19 15.75V16C19 17.66 17.66 19 16 19H8C6.34 19 5 17.66 5 16V15.5C5 14.95 5.45 14.5 6 14.5H7.48C8.95 14.5 10.12 13.24 9.97 11.74C9.84 10.44 8.65 9.5 7.34 9.5H6C5.45 9.5 5 9.05 5 8.5V8C5 6.34 6.34 5 8 5H16C17.66 5 19 6.34 19 8V8.24ZM5 12C5 11.45 5.45 11 6 11H7C7.55 11 8 11.45 8 12C8 12.55 7.55 13 7 13H6C5.45 13 5 12.55 5 12Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Strongbox2BoldIcon;
      