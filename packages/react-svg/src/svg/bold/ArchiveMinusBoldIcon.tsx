
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ArchiveMinusBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M16.8203 2H7.18031C5.05031 2 3.32031 3.74 3.32031 5.86V19.95C3.32031 21.75 4.61031 22.51 6.19031 21.64L11.0703 18.93C11.5903 18.64 12.4303 18.64 12.9403 18.93L17.8203 21.64C19.4003 22.52 20.6903 21.76 20.6903 19.95V5.86C20.6803 3.74 18.9503 2 16.8203 2ZM14.5003 11.4H9.50031C9.09031 11.4 8.75031 11.06 8.75031 10.65C8.75031 10.24 9.09031 9.9 9.50031 9.9H14.5003C14.9103 9.9 15.2503 10.24 15.2503 10.65C15.2503 11.06 14.9103 11.4 14.5003 11.4Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ArchiveMinusBoldIcon;
      