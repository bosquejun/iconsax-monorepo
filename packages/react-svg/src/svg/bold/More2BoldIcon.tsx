
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const More2BoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.97" d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM8.31 16.31C7.59 16.31 7 15.72 7 15C7 14.28 7.59 13.69 8.31 13.69C9.03 13.69 9.62 14.28 9.62 15C9.62 15.72 9.03 16.31 8.31 16.31ZM12 10.31C11.28 10.31 10.69 9.72 10.69 9C10.69 8.28 11.28 7.69 12 7.69C12.72 7.69 13.31 8.28 13.31 9C13.31 9.72 12.72 10.31 12 10.31ZM15.69 16.31C14.97 16.31 14.38 15.72 14.38 15C14.38 14.28 14.97 13.69 15.69 13.69C16.41 13.69 17 14.28 17 15C17 15.72 16.41 16.31 15.69 16.31Z" fill={color} />
        </svg>
      )
    }
    
    
    export default More2BoldIcon;
      