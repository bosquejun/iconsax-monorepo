
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const SearchStatus1BulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M14.5 10.75H8.5C8.09 10.75 7.75 10.41 7.75 10C7.75 9.59 8.09 9.25 8.5 9.25H14.5C14.91 9.25 15.25 9.59 15.25 10C15.25 10.41 14.91 10.75 14.5 10.75Z" fill={color} />
<path d="M11.5 13.75H8.5C8.09 13.75 7.75 13.41 7.75 13C7.75 12.59 8.09 12.25 8.5 12.25H11.5C11.91 12.25 12.25 12.59 12.25 13C12.25 13.41 11.91 13.75 11.5 13.75Z" fill={color} />
<path opacity="0.4" d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" fill={color} />
<path d="M21.3005 22.0001C21.1205 22.0001 20.9405 21.9301 20.8105 21.8001L18.9505 19.9401C18.6805 19.6701 18.6805 19.2301 18.9505 18.9501C19.2205 18.6801 19.6605 18.6801 19.9405 18.9501L21.8005 20.8101C22.0705 21.0801 22.0705 21.5201 21.8005 21.8001C21.6605 21.9301 21.4805 22.0001 21.3005 22.0001Z" fill={color} />
        </svg>
      )
    }
    
    
    export default SearchStatus1BulkIcon;
      