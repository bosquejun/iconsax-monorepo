
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const DropBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M16.5904 7.41L6.31044 17.69C5.83044 18.17 5.01044 18.06 4.72044 17.45C4.20044 16.38 3.90044 15.17 3.90044 13.9C3.88044 8.38 9.48044 3.66 11.3804 2.21C11.7504 1.93 12.2504 1.93 12.6104 2.21C13.4804 2.87 15.1104 4.24 16.6404 6.04C16.9804 6.44 16.9604 7.04 16.5904 7.41Z" fill={color} />
<path opacity="0.4" d="M20.1 13.91C20.1 18.37 16.47 22 12 22C10.21 22 8.53996 21.42 7.18996 20.42C6.69996 20.06 6.65996 19.34 7.08996 18.91L17.16 8.84002C17.63 8.37002 18.42 8.47002 18.74 9.05002C19.56 10.56 20.11 12.2 20.1 13.91Z" fill={color} />
        </svg>
      )
    }
    
    
    export default DropBulkIcon;
      