
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const CloudBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M20.4798 10.6901L2.00977 15.7201C2.11977 14.1301 3.10977 12.4601 5.10977 11.9701C4.51977 9.6401 5.01977 7.4501 6.53977 5.8601C8.26977 4.0501 11.0298 3.3301 13.4098 4.0701C15.5998 4.7401 17.1398 6.5401 17.6898 9.0401C18.7798 9.2901 19.7498 9.8601 20.4798 10.6901Z" fill={color} />
<path opacity="0.4" d="M20.17 18.7399C19.13 19.6899 17.77 20.2199 16.35 20.2199H5.97C3.23 20.0199 2 17.9099 2 16.0299C2 15.9299 2 15.8299 2.01 15.7199L20.48 10.6899C21.05 11.2999 21.48 12.0499 21.74 12.9099C22.4 15.0799 21.8 17.3099 20.17 18.7399Z" fill={color} />
        </svg>
      )
    }
    
    
    export default CloudBulkIcon;
      