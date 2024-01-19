
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const UserSearchBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill={color} />
<path opacity="0.4" d="M12.0002 14.5C6.99018 14.5 2.91016 17.86 2.91016 22C2.91016 22.28 3.13016 22.5 3.41016 22.5H20.5902C20.8702 22.5 21.0902 22.28 21.0902 22C21.0902 17.86 17.0102 14.5 12.0002 14.5Z" fill={color} />
<path d="M22.77 20.68L22.01 19.92C22.41 19.32 22.64 18.6 22.64 17.83C22.64 15.72 20.93 14.01 18.82 14.01C16.71 14.01 15 15.72 15 17.83C15 19.94 16.71 21.65 18.82 21.65C19.59 21.65 20.31 21.42 20.91 21.02L21.67 21.78C21.82 21.93 22.02 22.01 22.22 22.01C22.42 22.01 22.62 21.93 22.77 21.78C23.08 21.47 23.08 20.98 22.77 20.68Z" fill={color} />
        </svg>
      )
    }
    
    
    export default UserSearchBulkIcon;
      