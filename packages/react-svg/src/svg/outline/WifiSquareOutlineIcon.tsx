
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const WifiSquareOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M18.0005 10.7099C17.8405 10.7099 17.6805 10.6599 17.5405 10.5499C14.1705 7.94992 9.82051 7.94992 6.46051 10.5499C6.13051 10.7999 5.66052 10.7399 5.41052 10.4199C5.16052 10.0899 5.22052 9.61991 5.54052 9.36991C9.46052 6.33991 14.5305 6.33991 18.4605 9.36991C18.7905 9.61991 18.8505 10.0899 18.5905 10.4199C18.4505 10.6099 18.2205 10.7099 18.0005 10.7099Z" fill={color} />
<path d="M16.4004 13.8C16.2404 13.8 16.0804 13.75 15.9404 13.64C13.5404 11.79 10.4504 11.79 8.05037 13.64C7.72037 13.89 7.25036 13.83 7.00036 13.51C6.75036 13.18 6.81036 12.71 7.13036 12.46C10.0804 10.18 13.9004 10.18 16.8504 12.46C17.1804 12.71 17.2404 13.18 16.9804 13.51C16.8504 13.7 16.6304 13.8 16.4004 13.8Z" fill={color} />
<path d="M14.1996 16.8899C14.0396 16.8899 13.8796 16.8399 13.7396 16.7299C12.6796 15.9099 11.3096 15.9099 10.2496 16.7299C9.91958 16.9799 9.44958 16.9199 9.19958 16.5999C8.94958 16.2699 9.00958 15.7999 9.32958 15.5499C10.9196 14.3199 13.0596 14.3199 14.6496 15.5499C14.9796 15.7999 15.0396 16.2699 14.7796 16.5999C14.6496 16.7899 14.4296 16.8899 14.1996 16.8899Z" fill={color} />
<path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill={color} />
        </svg>
      )
    }
    
    
    export default WifiSquareOutlineIcon;
      