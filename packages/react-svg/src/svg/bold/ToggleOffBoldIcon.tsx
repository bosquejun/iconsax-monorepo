
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ToggleOffBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M16.65 3.85938H7.35C3.25 3.85938 2 5.10938 2 9.20938V14.7894C2 18.8894 3.25 20.1394 7.35 20.1394H16.65C20.75 20.1394 22 18.8894 22 14.7894V9.20938C22 5.10938 20.75 3.85938 16.65 3.85938ZM14.09 13.1194C14.09 15.3694 13.04 16.4194 10.79 16.4194H8.56C6.31 16.4194 5.26 15.3694 5.26 13.1194V10.8894C5.26 8.63938 6.31 7.58938 8.56 7.58938H10.79C13.04 7.58938 14.09 8.63938 14.09 10.8894V13.1194Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ToggleOffBoldIcon;
      