
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Maximize1BoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM18.75 14C18.75 14.41 18.41 14.75 18 14.75C17.59 14.75 17.25 14.41 17.25 14V12.75H12.75V17.25H14C14.41 17.25 14.75 17.59 14.75 18C14.75 18.41 14.41 18.75 14 18.75H10C9.59 18.75 9.25 18.41 9.25 18C9.25 17.59 9.59 17.25 10 17.25H11.25V12.75H6.75V14C6.75 14.41 6.41 14.75 6 14.75C5.59 14.75 5.25 14.41 5.25 14V10C5.25 9.59 5.59 9.25 6 9.25C6.41 9.25 6.75 9.59 6.75 10V11.25H11.25V6.75H10C9.59 6.75 9.25 6.41 9.25 6C9.25 5.59 9.59 5.25 10 5.25H14C14.41 5.25 14.75 5.59 14.75 6C14.75 6.41 14.41 6.75 14 6.75H12.75V11.25H17.25V10C17.25 9.59 17.59 9.25 18 9.25C18.41 9.25 18.75 9.59 18.75 10V14Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Maximize1BoldIcon;
      