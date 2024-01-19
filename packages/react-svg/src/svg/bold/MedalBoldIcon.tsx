
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MedalBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12 15C15.7279 15 18.75 12.0899 18.75 8.5C18.75 4.91015 15.7279 2 12 2C8.27208 2 5.25 4.91015 5.25 8.5C5.25 12.0899 8.27208 15 12 15Z" fill={color} />
<path d="M15.79 15.6091C16.12 15.4391 16.5 15.6891 16.5 16.0591V20.9091C16.5 21.8091 15.87 22.2491 15.09 21.8791L12.41 20.6091C12.18 20.5091 11.82 20.5091 11.59 20.6091L8.91 21.8791C8.13 22.2391 7.5 21.7991 7.5 20.8991L7.52 16.0591C7.52 15.6891 7.91 15.4491 8.23 15.6091C9.36 16.1791 10.64 16.4991 12 16.4991C13.36 16.4991 14.65 16.1791 15.79 15.6091Z" fill={color} />
        </svg>
      )
    }
    
    
    export default MedalBoldIcon;
      