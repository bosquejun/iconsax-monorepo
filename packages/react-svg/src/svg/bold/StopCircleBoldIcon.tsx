
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const StopCircleBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M11.9688 2C6.44875 2 1.96875 6.48 1.96875 12C1.96875 17.52 6.44875 22 11.9688 22C17.4888 22 21.9688 17.52 21.9688 12C21.9688 6.48 17.4988 2 11.9688 2ZM16.2287 13.23C16.2287 14.89 14.8887 16.23 13.2287 16.23H10.7688C9.10875 16.23 7.76875 14.89 7.76875 13.23V10.77C7.76875 9.11 9.10875 7.77 10.7688 7.77H13.2287C14.8887 7.77 16.2287 9.11 16.2287 10.77V13.23Z" fill={color} />
        </svg>
      )
    }
    
    
    export default StopCircleBoldIcon;
      