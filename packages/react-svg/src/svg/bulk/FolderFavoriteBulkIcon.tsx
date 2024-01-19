
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const FolderFavoriteBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M21.74 9.44H2V6.42C2 3.98 3.98 2 6.42 2H8.75C10.38 2 10.89 2.53 11.54 3.4L12.94 5.26C13.25 5.67 13.29 5.73 13.87 5.73H16.66C19.03 5.72 21.05 7.28 21.74 9.44Z" fill={color} />
<path d="M21.99 10.8399C21.97 10.3499 21.89 9.88994 21.74 9.43994H2V16.6499C2 19.5999 4.4 21.9999 7.35 21.9999H16.65C19.6 21.9999 22 19.5999 22 16.6499V11.0699C22 10.9999 22 10.9099 21.99 10.8399ZM14.54 15.9699L12.39 17.8499C12.28 17.9499 12.14 17.9999 12 17.9999C11.86 17.9999 11.72 17.9499 11.61 17.8499L9.46 15.9699C8.78 15.3699 8.69 14.3499 9.25 13.6399C9.83 12.9199 10.85 12.7899 11.59 13.3399L11.99 13.6399L12.39 13.3399C13.13 12.7899 14.15 12.9199 14.73 13.6399C15.31 14.3499 15.22 15.3699 14.54 15.9699Z" fill={color} />
        </svg>
      )
    }
    
    
    export default FolderFavoriteBulkIcon;
      