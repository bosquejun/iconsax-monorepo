
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const UserTickBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12.0002 14C6.99016 14 2.91016 17.36 2.91016 21.5C2.91016 21.78 3.13016 22 3.41016 22H20.5902C20.8702 22 21.0902 21.78 21.0902 21.5C21.0902 17.36 17.0102 14 12.0002 14Z" fill={color} />
<path d="M12 2C10.82 2 9.74 2.41 8.88 3.1C7.73 4.01 7 5.42 7 7C7 7.94 7.26 8.82 7.73 9.57C8.59 11.02 10.17 12 12 12C13.26 12 14.41 11.54 15.29 10.75C15.68 10.42 16.02 10.02 16.28 9.57C16.74 8.82 17 7.94 17 7C17 4.24 14.76 2 12 2ZM14.59 6.46L11.92 8.92C11.74 9.09 11.51 9.17 11.28 9.17C11.04 9.17 10.8 9.08 10.62 8.9L9.39 7.66C9.02 7.29 9.02 6.7 9.39 6.33C9.76 5.96 10.35 5.96 10.72 6.33L11.31 6.92L13.32 5.07C13.7 4.72 14.29 4.74 14.64 5.12C14.99 5.51 14.97 6.11 14.59 6.46Z" fill={color} />
        </svg>
      )
    }
    
    
    export default UserTickBoldIcon;
      