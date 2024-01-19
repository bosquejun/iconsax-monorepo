
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MouseSquareBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M21 7.52V13.4C21 13.74 20.67 13.98 20.35 13.88L16.42 12.66C15.34 12.33 14.18 12.61 13.39 13.4C12.59 14.2 12.3 15.37 12.64 16.45L13.85 20.35C13.95 20.67 13.71 21 13.37 21H7.52C4.07 21 2 18.94 2 15.48V7.52C2 4.06 4.07 2 7.52 2H15.48C18.93 2 21 4.06 21 7.52Z" fill={color} />
<path d="M21.9597 18.8385L20.3297 19.3885C19.8797 19.5385 19.5197 19.8885 19.3697 20.3485L18.8197 21.9785C18.3497 23.3885 16.3697 23.3585 15.9297 21.9485L14.0797 15.9985C13.7197 14.8185 14.8097 13.7185 15.9797 14.0885L21.9397 15.9385C23.3397 16.3785 23.3597 18.3685 21.9597 18.8385Z" fill={color} />
        </svg>
      )
    }
    
    
    export default MouseSquareBoldIcon;
      