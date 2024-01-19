
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ToggleOffCircleBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M13.86 3.85938H10.14C5.65 3.85938 2 7.50938 2 11.9994C2 16.4894 5.65 20.1394 10.14 20.1394H13.86C18.35 20.1394 22 16.4894 22 11.9994C22 7.50938 18.35 3.85938 13.86 3.85938ZM10.14 16.4194C7.7 16.4194 5.72 14.4394 5.72 11.9994C5.72 9.55938 7.7 7.57938 10.14 7.57938C12.58 7.57938 14.56 9.55938 14.56 11.9994C14.56 14.4394 12.58 16.4194 10.14 16.4194Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ToggleOffCircleBoldIcon;
      