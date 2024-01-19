
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const StopBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M20.36 7.78L4.54 17.28C3.93 17.65 3.11 17.28 3.03 16.57C3.01 16.38 3 16.19 3 16V8C3 5 5 3 8 3H16C19 3 20.23 4.54 20.81 6.65C20.93 7.09 20.74 7.55 20.36 7.78Z" fill={color} />
<path d="M20.9994 11.09V16C20.9994 19 18.9994 21 15.9994 21H7.99942C7.07942 21 6.20942 20.75 5.46942 20.31C4.82942 19.94 4.86942 19 5.49942 18.62L19.4794 10.23C20.1494 9.83001 20.9994 10.31 20.9994 11.09Z" fill={color} />
        </svg>
      )
    }
    
    
    export default StopBoldIcon;
      