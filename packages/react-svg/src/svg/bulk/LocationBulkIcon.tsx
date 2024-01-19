
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const LocationBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M20.6191 8.45C19.5691 3.83 15.5391 1.75 11.9991 1.75C11.9991 1.75 11.9991 1.75 11.9891 1.75C8.45912 1.75 4.41912 3.82 3.36912 8.44C2.19912 13.6 5.35912 17.97 8.21912 20.72C9.27912 21.74 10.6391 22.25 11.9991 22.25C13.3591 22.25 14.7191 21.74 15.7691 20.72C18.6291 17.97 21.7891 13.61 20.6191 8.45Z" fill={color} />
<path d="M11.9996 13.4602C13.7393 13.4602 15.1496 12.0499 15.1496 10.3102C15.1496 8.57046 13.7393 7.16016 11.9996 7.16016C10.2599 7.16016 8.84961 8.57046 8.84961 10.3102C8.84961 12.0499 10.2599 13.4602 11.9996 13.4602Z" fill={color} />
        </svg>
      )
    }
    
    
    export default LocationBulkIcon;
      