
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MessageTimeBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M5 13.5C4.06 13.5 3.19 13.83 2.5 14.38C1.58 15.11 1 16.24 1 17.5C1 19.71 2.79 21.5 5 21.5C6.01 21.5 6.93 21.12 7.64 20.5C8.47 19.77 9 18.7 9 17.5C9 15.29 7.21 13.5 5 13.5ZM6 17.75C6 18.01 5.86 18.26 5.64 18.39L4.39 19.14C4.27 19.22 4.13 19.25 4 19.25C3.75 19.25 3.5 19.12 3.36 18.89C3.15 18.53 3.26 18.07 3.62 17.86L4.51 17.33V16.25C4.51 15.84 4.85 15.5 5.26 15.5C5.67 15.5 6 15.84 6 16.25V17.75Z" fill={color} />
<path d="M17.25 2.42969H7.75C4.9 2.42969 3 4.32969 3 7.17969V11.6397C3 11.9897 3.36 12.2397 3.7 12.1497C4.12 12.0497 4.55 11.9997 5 11.9997C7.86 11.9997 10.22 14.3197 10.48 17.1297C10.5 17.4097 10.73 17.6297 11 17.6297H11.55L15.78 20.4497C16.4 20.8697 17.25 20.4097 17.25 19.6497V17.6297C18.67 17.6297 19.86 17.1497 20.69 16.3297C21.52 15.4897 22 14.2997 22 12.8797V7.17969C22 4.32969 20.1 2.42969 17.25 2.42969ZM15.83 10.8097H9.17C8.78 10.8097 8.46 10.4897 8.46 10.0997C8.46 9.69969 8.78 9.37969 9.17 9.37969H15.83C16.22 9.37969 16.54 9.69969 16.54 10.0997C16.54 10.4897 16.22 10.8097 15.83 10.8097Z" fill={color} />
        </svg>
      )
    }
    
    
    export default MessageTimeBoldIcon;
      