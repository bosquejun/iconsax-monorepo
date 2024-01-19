
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MoreBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM7 13.31C6.28 13.31 5.69 12.72 5.69 12C5.69 11.28 6.28 10.69 7 10.69C7.72 10.69 8.31 11.28 8.31 12C8.31 12.72 7.72 13.31 7 13.31ZM12 13.31C11.28 13.31 10.69 12.72 10.69 12C10.69 11.28 11.28 10.69 12 10.69C12.72 10.69 13.31 11.28 13.31 12C13.31 12.72 12.72 13.31 12 13.31ZM17 13.31C16.28 13.31 15.69 12.72 15.69 12C15.69 11.28 16.28 10.69 17 10.69C17.72 10.69 18.31 11.28 18.31 12C18.31 12.72 17.72 13.31 17 13.31Z" fill={color} />
        </svg>
      )
    }
    
    
    export default MoreBoldIcon;
      