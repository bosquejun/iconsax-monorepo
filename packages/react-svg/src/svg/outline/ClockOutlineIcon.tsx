
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ClockOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill={color} />
<path d="M15.7096 15.93C15.5796 15.93 15.4496 15.9 15.3296 15.82L12.2296 13.97C11.4596 13.51 10.8896 12.5 10.8896 11.61V7.51001C10.8896 7.10001 11.2296 6.76001 11.6396 6.76001C12.0496 6.76001 12.3896 7.10001 12.3896 7.51001V11.61C12.3896 11.97 12.6896 12.5 12.9996 12.68L16.0996 14.53C16.4596 14.74 16.5696 15.2 16.3596 15.56C16.2096 15.8 15.9596 15.93 15.7096 15.93Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ClockOutlineIcon;
      