
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const TextBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M20.95 4.13C20.66 3.71 20.29 3.34 19.87 3.05C18.92 2.36 17.68 2 16.19 2H7.81C7.61 2 7.41 2.01 7.22 2.03C3.94 2.24 2 4.37 2 7.81V16.19C2 17.68 2.36 18.92 3.05 19.87C3.34 20.29 3.71 20.66 4.13 20.95C4.95 21.55 5.99 21.9 7.22 21.98C7.41 21.99 7.61 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V7.81C22 6.32 21.64 5.08 20.95 4.13ZM18.75 8.9C18.75 9.31 18.41 9.65 18 9.65C17.59 9.65 17.25 9.31 17.25 8.9V7.72C17.25 7.4 16.99 7.14 16.67 7.14H12.75V16.86H14.53C14.94 16.86 15.28 17.2 15.28 17.61C15.28 18.02 14.94 18.36 14.53 18.36H9.47C9.06 18.36 8.72 18.02 8.72 17.61C8.72 17.2 9.06 16.86 9.47 16.86H11.25V7.14H7.33C7.01 7.14 6.75 7.4 6.75 7.72V8.9C6.75 9.31 6.41 9.65 6 9.65C5.59 9.65 5.25 9.31 5.25 8.9V7.72C5.25 6.57 6.18 5.64 7.33 5.64H16.66C17.81 5.64 18.74 6.57 18.74 7.72V8.9H18.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default TextBoldIcon;
      