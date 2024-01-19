
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MessagesBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M9.5 2C12.52 2 15.13 3.67001 16.3 6.07001C16.75 6.96001 17 7.95 17 9C17 12.87 13.64 16 9.5 16L8.57001 17.12L8.02 17.78C7.55 18.34 6.65 18.22 6.34 17.55L5 14.6C3.18 13.32 2 11.29 2 9C2 6.73 3.15 4.72 4.95 3.44" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M22.0003 12.86C22.0003 15.15 20.8203 17.1801 19.0003 18.4601L17.6603 21.41C17.3503 22.08 16.4503 22.2101 15.9803 21.6401L14.5003 19.86C12.0803 19.86 9.92031 18.7901 8.57031 17.1201L9.50031 16.0001C13.6403 16.0001 17.0003 12.8701 17.0003 9.00006C17.0003 7.95006 16.7503 6.96007 16.3003 6.07007C17.9303 6.44007 19.3403 7.31006 20.3603 8.50006" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M7 9H12" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default MessagesBrokenIcon;
      