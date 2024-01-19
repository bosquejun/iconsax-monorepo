
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const FolderMinusBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M21.74 9.44H2V6.42C2 3.98 3.98 2 6.42 2H8.75C10.38 2 10.89 2.53 11.54 3.4L12.94 5.26C13.25 5.67 13.29 5.73 13.87 5.73H16.66C19.03 5.72 21.05 7.28 21.74 9.44Z" fill={color} />
<path d="M21.99 10.8399C21.97 10.3499 21.89 9.88994 21.74 9.43994H2V16.6499C2 19.5999 4.4 21.9999 7.35 21.9999H16.65C19.6 21.9999 22 19.5999 22 16.6499V11.0699C22 10.9999 22 10.9099 21.99 10.8399ZM14.43 16.2999H9.43C9.02 16.2999 8.68 15.9599 8.68 15.5499C8.68 15.1399 9.02 14.7999 9.43 14.7999H14.43C14.84 14.7999 15.18 15.1399 15.18 15.5499C15.18 15.9599 14.84 16.2999 14.43 16.2999Z" fill={color} />
        </svg>
      )
    }
    
    
    export default FolderMinusBulkIcon;
      