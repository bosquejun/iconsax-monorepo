
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const TextBoldBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M13.75 12.75H12.25H8.5V16.74C8.5 17.02 8.73 17.25 9.01 17.25H13.75C14.99 17.25 16 16.24 16 15C16 13.76 14.99 12.75 13.75 12.75Z" fill={color} />
<path d="M14.5 9C14.5 7.76 13.49 6.75 12.25 6.75H9.01C8.73 6.75 8.5 6.98 8.5 7.26V11.25H12.25C13.49 11.25 14.5 10.24 14.5 9Z" fill={color} />
<path d="M20.95 4.13C20.66 3.71 20.29 3.34 19.87 3.05C18.92 2.36 17.68 2 16.19 2H7.81C7.61 2 7.41 2.01 7.22 2.03C3.94 2.24 2 4.37 2 7.81V16.19C2 17.68 2.36 18.92 3.05 19.87C3.34 20.29 3.71 20.66 4.13 20.95C4.95 21.55 5.99 21.9 7.22 21.98C7.41 21.99 7.61 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V7.81C22 6.32 21.64 5.08 20.95 4.13ZM13.75 18.75H9.01C7.9 18.75 7 17.85 7 16.74V12V7.26C7 6.15 7.9 5.25 9.01 5.25H12.25C14.32 5.25 16 6.93 16 9C16 9.96 15.63 10.83 15.03 11.49C16.46 12.02 17.5 13.38 17.5 15C17.5 17.07 15.82 18.75 13.75 18.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default TextBoldBoldIcon;
      