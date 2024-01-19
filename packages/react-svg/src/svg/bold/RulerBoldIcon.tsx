
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const RulerBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M19 7C18.86 7 18.75 7.11 18.75 7.25V12C18.75 12.41 18.41 12.75 18 12.75C17.59 12.75 17.25 12.41 17.25 12V7.25C17.25 7.11 17.14 7 17 7H15C14.86 7 14.75 7.11 14.75 7.25V9.6C14.75 10.01 14.41 10.35 14 10.35C13.59 10.35 13.25 10.01 13.25 9.6V7.25C13.25 7.11 13.14 7 13 7H11.04C10.9 7 10.79 7.11 10.79 7.25L10.75 12.01C10.75 12.42 10.41 12.75 10 12.75C10 12.75 10 12.75 9.99 12.75C9.58 12.75 9.25 12.41 9.25 11.99L9.29 7.25C9.29 7.11 9.18 7 9.04 7H7C6.86 7 6.75 7.11 6.75 7.25V10.8C6.75 11.21 6.41 11.55 6 11.55C5.59 11.55 5.25 11.21 5.25 10.8V7.25C5.25 7.11 5.14 7 5 7C3.34 7 2 8.34 2 10V14C2 15.66 3.34 17 5 17H19C20.66 17 22 15.66 22 14V10C22 8.34 20.66 7 19 7Z" fill={color} />
        </svg>
      )
    }
    
    
    export default RulerBoldIcon;
      