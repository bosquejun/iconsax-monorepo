
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const PercentageSquareBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill={color} />
<path d="M8.81976 16.0201C8.62976 16.0201 8.43977 15.9501 8.28977 15.8001C7.99977 15.5101 7.99977 15.0301 8.28977 14.7401L14.8398 8.19016C15.1298 7.90016 15.6098 7.90016 15.8998 8.19016C16.1898 8.48016 16.1898 8.96015 15.8998 9.25015L9.34976 15.8001C9.19976 15.9501 9.00976 16.0201 8.81976 16.0201Z" fill={color} />
<path d="M9.23001 7.66016C8.42001 7.66016 7.75 8.32017 7.75 9.14017C7.75 9.95017 8.41001 10.6201 9.23001 10.6201C10.04 10.6201 10.71 9.96017 10.71 9.14017C10.7 8.32017 10.04 7.66016 9.23001 7.66016Z" fill={color} />
<path d="M15.769 13.3901C14.959 13.3901 14.2891 14.0501 14.2891 14.8701C14.2891 15.6801 14.949 16.3501 15.769 16.3501C16.579 16.3501 17.2491 15.6901 17.2491 14.8701C17.2491 14.0501 16.589 13.3901 15.769 13.3901Z" fill={color} />
        </svg>
      )
    }
    
    
    export default PercentageSquareBulkIcon;
      