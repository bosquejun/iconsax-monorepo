
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const DirectLeftBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M21.2897 17.0198L19.5497 13.5398C19.0697 12.5698 19.0697 11.4398 19.5497 10.4698L21.2897 6.98983C22.7797 3.99983 19.5697 0.859829 16.6197 2.41983L15.0797 3.23983C14.8697 3.34983 14.6997 3.52983 14.5997 3.74983L8.89969 16.3898C8.66969 16.9098 8.87969 17.5198 9.37969 17.7798L16.6197 21.5898C19.5697 23.1498 22.7797 19.9998 21.2897 17.0198Z" fill={color} />
<path opacity="0.4" d="M7.68953 15.6L11.4195 7.31996C11.8395 6.38996 10.8395 5.44996 9.93953 5.92996L4.16953 8.95996C1.71953 10.25 1.71953 13.75 4.16953 15.04L6.20953 16.11C6.75953 16.4 7.42953 16.17 7.68953 15.6Z" fill={color} />
        </svg>
      )
    }
    
    
    export default DirectLeftBulkIcon;
      