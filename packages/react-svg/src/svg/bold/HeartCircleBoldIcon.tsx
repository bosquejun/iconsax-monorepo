
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const HeartCircleBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12.33 17C12.15 17.06 11.84 17.06 11.66 17C10.1 16.47 6.6 14.24 6.6 10.46C6.6 8.79 7.94 7.44 9.6 7.44C10.58 7.44 11.45 7.91 12 8.65C12.54 7.92 13.42 7.44 14.4 7.44C16.06 7.44 17.4 8.79 17.4 10.46C17.4 14.24 13.9 16.47 12.33 17Z" fill={color} />
        </svg>
      )
    }
    
    
    export default HeartCircleBoldIcon;
      