
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const GpsOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12 20.25C7.45 20.25 3.75 16.55 3.75 12C3.75 7.45 7.45 3.75 12 3.75C16.55 3.75 20.25 7.45 20.25 12C20.25 16.55 16.55 20.25 12 20.25ZM12 5.25C8.28 5.25 5.25 8.28 5.25 12C5.25 15.72 8.28 18.75 12 18.75C15.72 18.75 18.75 15.72 18.75 12C18.75 8.28 15.72 5.25 12 5.25Z" fill={color} />
<path d="M12 15.75C9.93 15.75 8.25 14.07 8.25 12C8.25 9.93 9.93 8.25 12 8.25C14.07 8.25 15.75 9.93 15.75 12C15.75 14.07 14.07 15.75 12 15.75ZM12 9.75C10.76 9.75 9.75 10.76 9.75 12C9.75 13.24 10.76 14.25 12 14.25C13.24 14.25 14.25 13.24 14.25 12C14.25 10.76 13.24 9.75 12 9.75Z" fill={color} />
<path d="M12 4.75C11.59 4.75 11.25 4.41 11.25 4V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2V4C12.75 4.41 12.41 4.75 12 4.75Z" fill={color} />
<path d="M4 12.75H2C1.59 12.75 1.25 12.41 1.25 12C1.25 11.59 1.59 11.25 2 11.25H4C4.41 11.25 4.75 11.59 4.75 12C4.75 12.41 4.41 12.75 4 12.75Z" fill={color} />
<path d="M12 22.75C11.59 22.75 11.25 22.41 11.25 22V20C11.25 19.59 11.59 19.25 12 19.25C12.41 19.25 12.75 19.59 12.75 20V22C12.75 22.41 12.41 22.75 12 22.75Z" fill={color} />
<path d="M22 12.75H20C19.59 12.75 19.25 12.41 19.25 12C19.25 11.59 19.59 11.25 20 11.25H22C22.41 11.25 22.75 11.59 22.75 12C22.75 12.41 22.41 12.75 22 12.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default GpsOutlineIcon;
      