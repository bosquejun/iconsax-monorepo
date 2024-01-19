
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const FolderFavoriteBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M21.0169 7.99175C21.4148 8.55833 20.9405 9.25 20.2482 9.25H3C2.44772 9.25 2 8.80228 2 8.25V6.42C2 3.98 3.98 2 6.42 2H8.74C10.37 2 10.88 2.53 11.53 3.4L12.93 5.26C13.24 5.67 13.28 5.72 13.86 5.72H16.65C18.4546 5.72 20.0516 6.61709 21.0169 7.99175Z" fill={color} />
<path d="M21.9834 11.7466C21.9815 11.1957 21.5343 10.75 20.9834 10.75L3 10.75C2.44772 10.75 2 11.1977 2 11.75V16.65C2 19.6 4.4 22 7.35 22H16.65C19.6 22 22 19.6 22 16.65L21.9834 11.7466ZM14.54 16.97L12.39 18.85C12.28 18.95 12.14 19 12 19C11.86 19 11.72 18.95 11.61 18.85L9.46 16.97C8.78 16.37 8.69 15.35 9.26 14.64C9.83 13.92 10.86 13.79 11.6 14.34L12 14.64L12.4 14.34C13.14 13.79 14.17 13.92 14.74 14.64C15.31 15.35 15.22 16.37 14.54 16.97Z" fill={color} />
        </svg>
      )
    }
    
    
    export default FolderFavoriteBoldIcon;
      