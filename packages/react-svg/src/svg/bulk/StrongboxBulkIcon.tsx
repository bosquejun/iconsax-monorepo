
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const StrongboxBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill={color} />
<path d="M22 10.1599H14.33C14.32 10.0899 14.32 10.0099 14.3 9.93991C14.09 9.13991 13.44 8.48991 12.64 8.27991C11.2 7.89991 9.89001 8.83991 9.67001 10.1599H2V11.6599H9.91C10.11 12.0399 10.39 12.3599 10.75 12.5799V14.5599C10.75 15.2499 11.31 15.8099 12 15.8099C12.69 15.8099 13.25 15.2499 13.25 14.5599V12.5799C13.61 12.3599 13.89 12.0399 14.09 11.6599H22V10.1599Z" fill={color} />
        </svg>
      )
    }
    
    
    export default StrongboxBulkIcon;
      