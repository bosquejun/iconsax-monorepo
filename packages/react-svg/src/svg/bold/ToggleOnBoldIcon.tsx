
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ToggleOnBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M16.65 3.85938H7.35C3.25 3.85938 2 5.10938 2 9.20938V14.7894C2 18.8894 3.25 20.1394 7.35 20.1394H16.65C20.75 20.1394 22 18.8894 22 14.7894V9.20938C22 5.10938 20.75 3.85938 16.65 3.85938ZM18.74 13.1194C18.74 15.3694 17.69 16.4194 15.44 16.4194H13.21C10.96 16.4194 9.91 15.3694 9.91 13.1194V10.8894C9.91 8.63938 10.96 7.58938 13.21 7.58938H15.44C17.69 7.58938 18.74 8.63938 18.74 10.8894V13.1194Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ToggleOnBoldIcon;
      