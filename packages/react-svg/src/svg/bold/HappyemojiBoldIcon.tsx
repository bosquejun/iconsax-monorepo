
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const HappyemojiBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M11.9707 2C6.4507 2 1.9707 6.48 1.9707 12C1.9707 17.52 6.4507 22 11.9707 22C17.4907 22 21.9707 17.52 21.9707 12C21.9707 6.48 17.5007 2 11.9707 2ZM17.4007 16.43C16.1707 18.2 14.1507 19.25 12.0007 19.25C9.8507 19.25 7.8307 18.2 6.6007 16.43C6.3607 16.09 6.4507 15.62 6.7907 15.39C7.1307 15.15 7.6007 15.24 7.8307 15.58C8.7807 16.94 10.3407 17.76 12.0007 17.76C13.6607 17.76 15.2207 16.95 16.1707 15.58C16.4107 15.24 16.8707 15.16 17.2107 15.39C17.5607 15.62 17.6407 16.09 17.4007 16.43Z" fill={color} />
        </svg>
      )
    }
    
    
    export default HappyemojiBoldIcon;
      