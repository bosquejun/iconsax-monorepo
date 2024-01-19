
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const FolderConnectionBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12.75 16H15.5C18.3 16 19 15.3 19 12.5V8.3C19 5.5 18.3 4.8 15.5 4.8H13.4C12.7 4.8 12.55 4.59 12.28 4.24L11.23 2.84C10.83 2.31 10.6 2 9.55 2H8.5C5.7 2 5 2.7 5 5.5V12.5C5 15.3 5.7 16 8.5 16H11.25V19C11.25 19.05 11.27 19.09 11.28 19.14C10.76 19.34 10.34 19.76 10.14 20.28C10.09 20.27 10.05 20.25 10 20.25H6C5.59 20.25 5.25 20.59 5.25 21C5.25 21.41 5.59 21.75 6 21.75H10C10.05 21.75 10.09 21.73 10.14 21.72C10.43 22.47 11.15 23 12 23C12.85 23 13.57 22.47 13.86 21.72C13.91 21.73 13.95 21.75 14 21.75H18C18.41 21.75 18.75 21.41 18.75 21C18.75 20.59 18.41 20.25 18 20.25H14C13.95 20.25 13.91 20.27 13.86 20.28C13.66 19.76 13.24 19.34 12.72 19.14C12.73 19.09 12.75 19.05 12.75 19V16Z" fill={color} />
        </svg>
      )
    }
    
    
    export default FolderConnectionBoldIcon;
      