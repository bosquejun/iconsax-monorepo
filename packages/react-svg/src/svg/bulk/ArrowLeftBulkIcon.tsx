
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ArrowLeftBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill={color} />
<path d="M15.4995 11.2499H10.3095L12.0295 9.52994C12.3195 9.23994 12.3195 8.75994 12.0295 8.46994C11.7395 8.17994 11.2595 8.17994 10.9695 8.46994L7.96945 11.4699C7.67945 11.7599 7.67945 12.2399 7.96945 12.5299L10.9695 15.5299C11.1195 15.6799 11.3095 15.7499 11.4995 15.7499C11.6895 15.7499 11.8795 15.6799 12.0295 15.5299C12.3195 15.2399 12.3195 14.7599 12.0295 14.4699L10.3095 12.7499H15.4995C15.9095 12.7499 16.2495 12.4099 16.2495 11.9999C16.2495 11.5899 15.9095 11.2499 15.4995 11.2499Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ArrowLeftBulkIcon;
      