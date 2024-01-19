
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const SearchFavoriteBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M2 11.5C2 6.25 6.25 2 11.5 2" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M21.0007 11.5C21.0007 16.75 16.7507 21 11.5007 21C7.7607 21 4.5207 18.84 2.9707 15.69" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M22 22L20 20" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M14.4999 6.13008C14.1499 5.03008 14.5599 3.66008 15.7199 3.29008C16.3299 3.09008 17.0799 3.26008 17.5099 3.85008C17.9099 3.24008 18.6899 3.10008 19.2899 3.29008C20.4499 3.66008 20.8599 5.03008 20.5099 6.13008C19.9599 7.88008 18.0399 8.79008 17.5099 8.79008C16.9699 8.79008 15.0699 7.90008 14.4999 6.13008Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default SearchFavoriteBrokenIcon;
      