
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Money3BoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM8 17.75H5C4.59 17.75 4.25 17.41 4.25 17C4.25 16.59 4.59 16.25 5 16.25H8C8.41 16.25 8.75 16.59 8.75 17C8.75 17.41 8.41 17.75 8 17.75ZM12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15ZM19 7.75H16C15.59 7.75 15.25 7.41 15.25 7C15.25 6.59 15.59 6.25 16 6.25H19C19.41 6.25 19.75 6.59 19.75 7C19.75 7.41 19.41 7.75 19 7.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Money3BoldIcon;
      