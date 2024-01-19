
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Messages2BrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M13.1698 2C8.28985 2 4.33984 5.68999 4.33984 10.24C4.33984 10.5 4.34985 10.75 4.37985 11C5.26985 10.42 6.33985 10.09 7.49985 10.09C10.5398 10.09 12.9998 12.39 12.9998 15.23C12.9998 16.42 12.5599 17.52 11.8199 18.39C12.2599 18.45 12.7098 18.48 13.1698 18.48L17.3598 20.97C18.0698 21.4 18.9598 20.82 18.8598 19.99L18.4698 16.83C20.6098 15.33 21.9998 12.94 21.9998 10.24C21.9998 7.16999 20.1999 4.49001 17.5199 3.07001" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M4.38 11.0001C5.27 10.4201 6.34 10.0901 7.5 10.0901C10.54 10.0901 13 12.39 13 15.23C13 16.42 12.56 17.5201 11.82 18.3901C10.83 19.5901 9.26 20.36 7.5 20.36L4.89 21.91C4.45 22.18 3.89 21.81 3.95 21.3L4.2 19.3301C2.86 18.4001 2 16.91 2 15.23C2 14.93 2.03 14.64 2.08 14.36" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default Messages2BrokenIcon;
      