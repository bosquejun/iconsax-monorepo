
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ArrowUpBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill={color} />
<path d="M15.5295 10.9699L12.5295 7.96994C12.2395 7.67994 11.7595 7.67994 11.4695 7.96994L8.46945 10.9699C8.17945 11.2599 8.17945 11.7399 8.46945 12.0299C8.75945 12.3199 9.23945 12.3199 9.52945 12.0299L11.2495 10.3099V15.4999C11.2495 15.9099 11.5895 16.2499 11.9995 16.2499C12.4095 16.2499 12.7495 15.9099 12.7495 15.4999V10.3099L14.4695 12.0299C14.6195 12.1799 14.8095 12.2499 14.9995 12.2499C15.1895 12.2499 15.3795 12.1799 15.5295 12.0299C15.8195 11.7399 15.8195 11.2599 15.5295 10.9699Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ArrowUpBulkIcon;
      