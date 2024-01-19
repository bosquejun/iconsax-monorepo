
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ScissorBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM17.76 14.68C18.09 14.93 18.16 15.4 17.91 15.73C17.76 15.93 17.54 16.03 17.31 16.03C17.15 16.03 17 15.98 16.86 15.88L12.91 12.93L10.5 14.73C10.51 14.83 10.53 14.93 10.53 15.03C10.53 16.3 9.5 17.33 8.23 17.33C6.96 17.33 5.93 16.3 5.93 15.03C5.93 13.76 6.96 12.73 8.23 12.73C8.85 12.73 9.4 12.98 9.81 13.37L11.65 11.99L9.82 10.62C9.41 11.02 8.84 11.27 8.22 11.27C6.95 11.27 5.92 10.24 5.92 8.97C5.92 7.7 6.95 6.67 8.22 6.67C9.49 6.67 10.52 7.7 10.52 8.97C10.52 9.07 10.5 9.16 10.49 9.25L12.89 11.05L16.84 8.1C17.17 7.85 17.64 7.92 17.89 8.25C18.14 8.58 18.07 9.05 17.74 9.3L14.14 11.99L17.76 14.68Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ScissorBoldIcon;
      