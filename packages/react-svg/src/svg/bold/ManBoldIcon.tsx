
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ManBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M22.19 2.21C22.12 2.03 21.97 1.88 21.79 1.81C21.69 1.77 21.6 1.75 21.5 1.75H15C14.59 1.75 14.25 2.09 14.25 2.5C14.25 2.91 14.59 3.25 15 3.25H19.69L15.18 7.77H15.17C13.83 6.66 12.12 6 10.25 6C5.97 6 2.5 9.47 2.5 13.75C2.5 18.03 5.97 21.5 10.25 21.5C14.53 21.5 18 18.03 18 13.75C18 11.88 17.34 10.17 16.23 8.83L20.75 4.31V9C20.75 9.41 21.09 9.75 21.5 9.75C21.91 9.75 22.25 9.41 22.25 9V2.5C22.25 2.4 22.23 2.31 22.19 2.21Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ManBoldIcon;
      