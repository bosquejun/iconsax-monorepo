
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const FolderBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M22 11.0699V16.6499C22 19.5999 19.6 21.9999 16.65 21.9999H7.35C4.4 21.9999 2 19.5999 2 16.6499V9.43994H21.74C21.89 9.88994 21.97 10.3499 21.99 10.8399C22 10.9099 22 10.9999 22 11.0699Z" fill={color} />
<path opacity="0.4" d="M21.74 9.44H2V6.42C2 3.98 3.98 2 6.42 2H8.75C10.38 2 10.89 2.53 11.54 3.4L12.94 5.26C13.25 5.67 13.29 5.73 13.87 5.73H16.66C19.03 5.72 21.05 7.28 21.74 9.44Z" fill={color} />
        </svg>
      )
    }
    
    
    export default FolderBulkIcon;
      