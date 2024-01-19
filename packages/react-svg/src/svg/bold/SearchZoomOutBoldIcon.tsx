
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const SearchZoomOutBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M11.01 2C6.04 2 2 6.04 2 11.01C2 15.98 6.04 20.02 11.01 20.02C15.98 20.02 20.02 15.98 20.02 11.01C20.02 6.04 15.98 2 11.01 2ZM13.5 11.75H8.5C8.09 11.75 7.75 11.41 7.75 11C7.75 10.59 8.09 10.25 8.5 10.25H13.5C13.91 10.25 14.25 10.59 14.25 11C14.25 11.41 13.91 11.75 13.5 11.75Z" fill={color} />
<path d="M21.9901 18.95C21.6601 18.34 20.9601 18 20.0201 18C19.3101 18 18.7001 18.29 18.3401 18.79C17.9801 19.29 17.9001 19.96 18.1201 20.63C18.5501 21.93 19.3001 22.22 19.7101 22.27C19.7701 22.28 19.8301 22.28 19.9001 22.28C20.3401 22.28 21.0201 22.09 21.6801 21.1C22.2101 20.33 22.3101 19.56 21.9901 18.95Z" fill={color} />
        </svg>
      )
    }
    
    
    export default SearchZoomOutBoldIcon;
      