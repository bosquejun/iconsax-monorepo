
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const IconOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12.0005 22.75C7.12052 22.75 3.15051 18.78 3.15051 13.9C3.12051 8.17 8.58051 3.4 10.9305 1.61C11.5605 1.13 12.4405 1.13 13.0705 1.61C15.4205 3.43 20.8805 8.26 20.8505 13.91C20.8505 18.78 16.8805 22.75 12.0005 22.75ZM12.0005 2.75C11.9505 2.75 11.8905 2.77 11.8405 2.81C10.1505 4.1 4.63052 8.71 4.66052 13.9C4.66052 17.96 7.96053 21.25 12.0105 21.25C16.0605 21.25 19.3605 17.96 19.3605 13.91C19.3905 8.79 13.8605 4.12 12.1605 2.81C12.1005 2.77 12.0505 2.75 12.0005 2.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default IconOutlineIcon;
      