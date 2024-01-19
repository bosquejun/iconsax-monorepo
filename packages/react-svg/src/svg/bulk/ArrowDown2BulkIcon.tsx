
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ArrowDown2BulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M2 16.19V7.81C2 4.17 4.17 2 7.81 2H16.18C19.83 2 22 4.17 22 7.81V16.18C22 19.82 19.83 21.99 16.19 21.99H7.81C4.17 22 2 19.83 2 16.19Z" fill={color} />
<path d="M11.4704 18.53L7.18039 14.24C6.89039 13.95 6.89039 13.47 7.18039 13.18C7.47039 12.89 7.95039 12.89 8.24039 13.18L11.2504 16.19V6C11.2504 5.59 11.5904 5.25 12.0004 5.25C12.4104 5.25 12.7504 5.59 12.7504 6V16.19L15.7604 13.18C16.0504 12.89 16.5304 12.89 16.8204 13.18C16.9704 13.33 17.0404 13.52 17.0404 13.71C17.0404 13.9 16.9704 14.09 16.8204 14.24L12.5304 18.53C12.3904 18.67 12.2004 18.75 12.0004 18.75C11.8004 18.75 11.6104 18.67 11.4704 18.53Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ArrowDown2BulkIcon;
      