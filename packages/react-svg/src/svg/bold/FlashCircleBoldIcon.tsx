
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const FlashCircleBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM15.53 13.23L10.35 16.82C9.59 17.35 9.15 17.04 9.37 16.15L10.32 12.31L8.67 11.9C7.92 11.72 7.83 11.2 8.46 10.76L13.64 7.17C14.4 6.64 14.84 6.95 14.62 7.84L13.67 11.68L15.32 12.09C16.07 12.28 16.16 12.79 15.53 13.23Z" fill={color} />
        </svg>
      )
    }
    
    
    export default FlashCircleBoldIcon;
      