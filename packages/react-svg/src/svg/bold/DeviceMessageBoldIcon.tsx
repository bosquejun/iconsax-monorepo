
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const DeviceMessageBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M18.75 13.9H16.9038C16.7057 13.9 16.5121 13.9588 16.3476 14.069L14.09 15.58C13.73 15.82 13.31 15.93 12.9 15.93C12.55 15.93 12.2 15.85 11.88 15.67C11.3982 15.4153 11.0443 14.9475 10.8705 14.423C10.7313 14.0029 10.4537 13.6136 10.0537 13.4244C9.59444 13.2073 9.18043 12.9204 8.83 12.57C7.97 11.71 7.5 10.5 7.5 9.15V5.25V5C7.5 4.44772 7.05228 4 6.5 4C3.8 4 2 5.35 2 8.5V13.9C2 17.05 3.8 18.4 6.5 18.4H10.25V21.25H7.4C6.99 21.25 6.65 21.59 6.65 22C6.65 22.41 6.99 22.75 7.4 22.75H14.6C15.01 22.75 15.35 22.41 15.35 22C15.35 21.59 15.01 21.25 14.6 21.25H11.75V18.4H15.5C17.8954 18.4 19.5824 17.3374 19.9326 14.898C20.011 14.3513 19.5523 13.9 19 13.9H18.75Z" fill={color} />
<path d="M18.75 2H12.25C10.76 2 9.64 2.76 9.2 4C9.07 4.38 9 4.8 9 5.25V9.15C9 10.12 9.32 10.94 9.89 11.51C10.46 12.08 11.28 12.4 12.25 12.4V13.79C12.25 14.3 12.83 14.61 13.26 14.33L16.15 12.4H18.75C19.2 12.4 19.62 12.33 20 12.2C21.24 11.76 22 10.64 22 9.15V5.25C22 3.3 20.7 2 18.75 2ZM12.62 8C12.2 8 11.87 7.66 11.87 7.25C11.87 6.84 12.2 6.5 12.62 6.5C13.04 6.5 13.37 6.84 13.37 7.25C13.37 7.66 13.04 8 12.62 8ZM15.44 8C15.02 8 14.69 7.66 14.69 7.25C14.69 6.84 15.03 6.5 15.44 6.5C15.85 6.5 16.19 6.84 16.19 7.25C16.19 7.66 15.85 8 15.44 8ZM18.25 8C17.83 8 17.5 7.66 17.5 7.25C17.5 6.84 17.84 6.5 18.25 6.5C18.66 6.5 19 6.84 19 7.25C19 7.66 18.66 8 18.25 8Z" fill={color} />
<path d="M22 5.25V9.15C22 10.64 21.24 11.76 20 12.2C19.62 12.33 19.2 12.4 18.75 12.4H16.15L13.26 14.33C12.83 14.61 12.25 14.3 12.25 13.79V12.4C11.28 12.4 10.46 12.08 9.89 11.51C9.32 10.94 9 10.12 9 9.15V5.25C9 4.8 9.07 4.38 9.2 4C9.64 2.76 10.76 2 12.25 2H18.75C20.7 2 22 3.3 22 5.25Z" fill={color} />
        </svg>
      )
    }
    
    
    export default DeviceMessageBoldIcon;
      