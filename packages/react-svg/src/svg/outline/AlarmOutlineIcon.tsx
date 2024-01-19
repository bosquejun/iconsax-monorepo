
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const AlarmOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M22 22.75H2C1.59 22.75 1.25 22.41 1.25 22C1.25 21.59 1.59 21.25 2 21.25H22C22.41 21.25 22.75 21.59 22.75 22C22.75 22.41 22.41 22.75 22 22.75Z" fill={color} />
<path d="M21 22.75H3C2.59 22.75 2.25 22.41 2.25 22V15C2.25 9.62 6.62 5.25 12 5.25C17.38 5.25 21.75 9.62 21.75 15V22C21.75 22.41 21.41 22.75 21 22.75ZM3.75 21.25H20.25V15C20.25 10.45 16.55 6.75 12 6.75C7.45 6.75 3.75 10.45 3.75 15V21.25Z" fill={color} />
<path d="M12 3.75C11.59 3.75 11.25 3.41 11.25 3V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2V3C12.75 3.41 12.41 3.75 12 3.75Z" fill={color} />
<path d="M4.99945 5.74994C4.80945 5.74994 4.61945 5.67994 4.46945 5.52994L3.46945 4.52994C3.17945 4.23994 3.17945 3.75994 3.46945 3.46994C3.75945 3.17994 4.23945 3.17994 4.52945 3.46994L5.52945 4.46994C5.81945 4.75994 5.81945 5.23994 5.52945 5.52994C5.37945 5.67994 5.18945 5.74994 4.99945 5.74994Z" fill={color} />
<path d="M18.9995 5.74994C18.8095 5.74994 18.6195 5.67994 18.4695 5.52994C18.1795 5.23994 18.1795 4.75994 18.4695 4.46994L19.4695 3.46994C19.7595 3.17994 20.2395 3.17994 20.5295 3.46994C20.8195 3.75994 20.8195 4.23994 20.5295 4.52994L19.5295 5.52994C19.3795 5.67994 19.1895 5.74994 18.9995 5.74994Z" fill={color} />
        </svg>
      )
    }
    
    
    export default AlarmOutlineIcon;
      