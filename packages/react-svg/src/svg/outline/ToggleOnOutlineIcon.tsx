
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ToggleOnOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M15.7 16.75H13.3C10.88 16.75 9.75 15.62 9.75 13.2V10.8C9.75 8.38 10.88 7.25 13.3 7.25H15.7C18.12 7.25 19.25 8.38 19.25 10.8V13.2C19.25 15.62 18.12 16.75 15.7 16.75ZM13.3 8.75C11.71 8.75 11.25 9.21 11.25 10.8V13.2C11.25 14.79 11.71 15.25 13.3 15.25H15.7C17.29 15.25 17.75 14.79 17.75 13.2V10.8C17.75 9.21 17.29 8.75 15.7 8.75H13.3Z" fill={color} />
<path d="M17 20.75H7C2.59 20.75 1.25 19.41 1.25 15V9C1.25 4.59 2.59 3.25 7 3.25H17C21.41 3.25 22.75 4.59 22.75 9V15C22.75 19.41 21.41 20.75 17 20.75ZM7 4.75C3.42 4.75 2.75 5.43 2.75 9V15C2.75 18.57 3.42 19.25 7 19.25H17C20.58 19.25 21.25 18.57 21.25 15V9C21.25 5.43 20.58 4.75 17 4.75H7Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ToggleOnOutlineIcon;
      