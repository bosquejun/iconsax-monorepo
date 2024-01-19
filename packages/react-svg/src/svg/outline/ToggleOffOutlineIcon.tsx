
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ToggleOffOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M10.7 16.75H8.3C5.88 16.75 4.75 15.62 4.75 13.2V10.8C4.75 8.38 5.88 7.25 8.3 7.25H10.7C13.12 7.25 14.25 8.38 14.25 10.8V13.2C14.25 15.62 13.12 16.75 10.7 16.75ZM8.3 8.75C6.71 8.75 6.25 9.21 6.25 10.8V13.2C6.25 14.79 6.71 15.25 8.3 15.25H10.7C12.29 15.25 12.75 14.79 12.75 13.2V10.8C12.75 9.21 12.29 8.75 10.7 8.75H8.3Z" fill={color} />
<path d="M17 20.75H7C2.59 20.75 1.25 19.41 1.25 15V9C1.25 4.59 2.59 3.25 7 3.25H17C21.41 3.25 22.75 4.59 22.75 9V15C22.75 19.41 21.41 20.75 17 20.75ZM7 4.75C3.42 4.75 2.75 5.43 2.75 9V15C2.75 18.57 3.42 19.25 7 19.25H17C20.58 19.25 21.25 18.57 21.25 15V9C21.25 5.43 20.58 4.75 17 4.75H7Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ToggleOffOutlineIcon;
      