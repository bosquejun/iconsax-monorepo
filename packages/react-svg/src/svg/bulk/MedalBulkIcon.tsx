
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MedalBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12 15C15.7279 15 18.75 12.0899 18.75 8.5C18.75 4.91015 15.7279 2 12 2C8.27208 2 5.25 4.91015 5.25 8.5C5.25 12.0899 8.27208 15 12 15Z" fill={color} />
<path opacity="0.4" d="M7.51974 13.5201L7.50977 20.9001C7.50977 21.8001 8.13977 22.2401 8.91977 21.8701L11.5998 20.6001C11.8198 20.4901 12.1898 20.4901 12.4098 20.6001L15.0998 21.8701C15.8698 22.2301 16.5098 21.8001 16.5098 20.9001V13.3401" fill={color} />
        </svg>
      )
    }
    
    
    export default MedalBulkIcon;
      