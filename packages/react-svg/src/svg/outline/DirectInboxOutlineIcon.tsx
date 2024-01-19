
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const DirectInboxOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12 9.75C11.9 9.75 11.81 9.73 11.71 9.69C11.43 9.58 11.25 9.3 11.25 9V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2V7.19L13.47 6.47C13.76 6.18 14.24 6.18 14.53 6.47C14.82 6.76 14.82 7.24 14.53 7.53L12.53 9.53C12.39 9.67 12.2 9.75 12 9.75Z" fill={color} />
<path d="M11.9995 9.74994C11.8095 9.74994 11.6195 9.67994 11.4695 9.52994L9.46945 7.52994C9.17945 7.23994 9.17945 6.75994 9.46945 6.46994C9.75945 6.17994 10.2395 6.17994 10.5295 6.46994L12.5295 8.46994C12.8195 8.75994 12.8195 9.23994 12.5295 9.52994C12.3795 9.67994 12.1895 9.74994 11.9995 9.74994Z" fill={color} />
<path d="M13.7605 17.75H10.2305C9.18047 17.75 8.24047 17.17 7.77047 16.23L6.60047 13.89C6.56047 13.8 6.47047 13.75 6.38047 13.75H1.98047C1.57047 13.75 1.23047 13.41 1.23047 13C1.23047 12.59 1.57047 12.25 1.98047 12.25H6.39047C7.06047 12.25 7.66047 12.62 7.96047 13.22L9.13047 15.56C9.34047 15.99 9.77047 16.25 10.2505 16.25H13.7805C14.2605 16.25 14.6905 15.99 14.9005 15.56L16.0705 13.22C16.3705 12.62 16.9705 12.25 17.6405 12.25H22.0005C22.4105 12.25 22.7505 12.59 22.7505 13C22.7505 13.41 22.4105 13.75 22.0005 13.75H17.6405C17.5405 13.75 17.4605 13.8 17.4205 13.89L16.2505 16.23C15.7505 17.17 14.8105 17.75 13.7605 17.75Z" fill={color} />
<path d="M15 22.7499H9C3.57 22.7499 1.25 20.4299 1.25 14.9999V10.9999C1.25 6.30993 2.99 3.95993 6.89 3.38993C7.31 3.32993 7.68 3.60993 7.74 4.01993C7.8 4.42993 7.52 4.80993 7.11 4.86993C3.97 5.32993 2.75 7.04993 2.75 10.9999V14.9999C2.75 19.6099 4.39 21.2499 9 21.2499H15C19.61 21.2499 21.25 19.6099 21.25 14.9999V10.9999C21.25 7.04993 20.03 5.32993 16.89 4.86993C16.48 4.80993 16.2 4.42993 16.26 4.01993C16.32 3.60993 16.7 3.32993 17.11 3.38993C21.01 3.95993 22.75 6.30993 22.75 10.9999V14.9999C22.75 20.4299 20.43 22.7499 15 22.7499Z" fill={color} />
        </svg>
      )
    }
    
    
    export default DirectInboxOutlineIcon;
      