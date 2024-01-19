
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const SmallcapsBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M20.95 4.13C20.66 3.71 20.29 3.34 19.87 3.05C18.92 2.36 17.68 2 16.19 2H7.81C7.61 2 7.41 2.01 7.22 2.03C3.94 2.24 2 4.37 2 7.81V16.19C2 17.68 2.36 18.92 3.05 19.87C3.34 20.29 3.71 20.66 4.13 20.95C4.95 21.55 5.99 21.9 7.22 21.98C7.41 21.99 7.61 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V7.81C22 6.32 21.64 5.08 20.95 4.13ZM11.39 15.88H8.52C8.11 15.88 7.77 15.54 7.77 15.13C7.77 14.72 8.11 14.38 8.52 14.38H9.52V7.91H6.95C6.84 7.91 6.75 8 6.75 8.11V8.89C6.75 9.3 6.41 9.63 6 9.63C5.59 9.63 5.25 9.3 5.25 8.88V8.1C5.25 7.16 6.01 6.4 6.95 6.4H13.59C14.53 6.4 15.29 7.16 15.29 8.1V8.88C15.29 9.29 14.95 9.63 14.54 9.63C14.13 9.63 13.79 9.29 13.79 8.88V8.1C13.79 7.99 13.7 7.9 13.59 7.9H11.02V14.38H11.39C11.8 14.38 12.14 14.72 12.14 15.13C12.14 15.54 11.8 15.88 11.39 15.88ZM18.75 12.23C18.75 12.64 18.41 12.98 18 12.98C17.59 12.98 17.25 12.64 17.25 12.23V11.9H15.7V16.1H16.05C16.46 16.1 16.8 16.44 16.8 16.85C16.8 17.26 16.46 17.6 16.05 17.6H13.85C13.44 17.6 13.1 17.26 13.1 16.85C13.1 16.44 13.44 16.1 13.85 16.1H14.2V11.9H13.72C13.31 11.9 12.97 11.56 12.97 11.15C12.97 10.74 13.31 10.4 13.72 10.4H17.32C18.11 10.4 18.75 11.04 18.75 11.83V12.23Z" fill={color} />
        </svg>
      )
    }
    
    
    export default SmallcapsBoldIcon;
      