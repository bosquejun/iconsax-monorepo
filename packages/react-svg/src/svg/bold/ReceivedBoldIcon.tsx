
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ReceivedBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M4.71 18.1914C4.81 18.2314 4.9 18.2514 5 18.2514H15.27C15.68 18.2514 16.02 17.9114 16.02 17.5014C16.02 17.0914 15.68 16.7514 15.27 16.7514H6.81L19.53 4.03141C19.82 3.74141 19.82 3.26141 19.53 2.97141C19.24 2.68141 18.76 2.68141 18.47 2.97141L5.75 15.6914V7.23141C5.75 6.82141 5.41 6.48141 5 6.48141C4.59 6.48141 4.25 6.82141 4.25 7.23141V17.5014C4.25 17.6014 4.27 17.6914 4.31 17.7914C4.38 17.9714 4.53 18.1214 4.71 18.1914Z" fill={color} />
<path d="M20.5 21.25H3.5C3.09 21.25 2.75 21.59 2.75 22C2.75 22.41 3.09 22.75 3.5 22.75H20.5C20.91 22.75 21.25 22.41 21.25 22C21.25 21.59 20.91 21.25 20.5 21.25Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ReceivedBoldIcon;
      