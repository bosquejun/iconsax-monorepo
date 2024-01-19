
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Hashtag1BoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M8.05078 10.1408V11.3008H11.3108V8.05078H10.1508C8.99078 8.05078 8.05078 8.99078 8.05078 10.1408Z" fill={color} />
<path d="M8.05078 13.8592C8.05078 15.0092 8.99078 15.9492 10.1408 15.9492H11.3008V12.6992H8.05078V13.8592Z" fill={color} />
<path d="M12.6992 15.9492H13.8592C15.0092 15.9492 15.9492 15.0092 15.9492 13.8592V12.6992H12.6992V15.9492Z" fill={color} />
<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM17.35 13.86C17.35 15.78 15.78 17.35 13.86 17.35H10.14C8.22 17.35 6.65 15.79 6.65 13.86V10.14C6.65 8.22 8.22 6.65 10.14 6.65H13.86C15.78 6.65 17.35 8.21 17.35 10.14V13.86Z" fill={color} />
<path d="M13.8592 8.05078H12.6992V11.3108H15.9592V10.1508C15.9492 8.99078 15.0092 8.05078 13.8592 8.05078Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Hashtag1BoldIcon;
      