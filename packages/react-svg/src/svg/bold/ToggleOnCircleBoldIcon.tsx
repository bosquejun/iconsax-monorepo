
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ToggleOnCircleBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M13.86 3.85938H10.14C5.65 3.85938 2 7.50938 2 11.9994C2 16.4894 5.65 20.1394 10.14 20.1394H13.86C18.35 20.1394 22 16.4894 22 11.9994C22 7.50938 18.35 3.85938 13.86 3.85938ZM13.86 16.4194C11.42 16.4194 9.44 14.4394 9.44 11.9994C9.44 9.55938 11.42 7.57938 13.86 7.57938C16.3 7.57938 18.28 9.55938 18.28 11.9994C18.28 14.4394 16.3 16.4194 13.86 16.4194Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ToggleOnCircleBoldIcon;
      