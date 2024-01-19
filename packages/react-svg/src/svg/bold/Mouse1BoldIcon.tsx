
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Mouse1BoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.15 12.83L14.42 13.41C13.94 13.57 13.57 13.94 13.41 14.42L12.83 16.15C12.34 17.64 10.24 17.61 9.78 16.12L7.83 9.84C7.45 8.59 8.6 7.44 9.83 7.82L16.12 9.77C17.61 10.24 17.63 12.34 16.15 12.83Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Mouse1BoldIcon;
      