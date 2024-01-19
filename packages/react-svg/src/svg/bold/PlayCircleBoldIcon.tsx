
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const PlayCircleBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M11.9688 2C6.44875 2 1.96875 6.48 1.96875 12C1.96875 17.52 6.44875 22 11.9688 22C17.4888 22 21.9688 17.52 21.9688 12C21.9688 6.48 17.4988 2 11.9688 2ZM14.9688 14.23L12.0687 15.9C11.7087 16.11 11.3088 16.21 10.9187 16.21C10.5188 16.21 10.1287 16.11 9.76875 15.9C9.04875 15.48 8.61875 14.74 8.61875 13.9V10.55C8.61875 9.72 9.04875 8.97 9.76875 8.55C10.4888 8.13 11.3487 8.13 12.0787 8.55L14.9787 10.22C15.6987 10.64 16.1287 11.38 16.1287 12.22C16.1287 13.06 15.6987 13.81 14.9688 14.23Z" fill={color} />
        </svg>
      )
    }
    
    
    export default PlayCircleBoldIcon;
      