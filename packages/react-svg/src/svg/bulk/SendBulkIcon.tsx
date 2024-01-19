
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const SendBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M9.50929 4.22989L18.0693 8.50989C21.9093 10.4299 21.9093 13.5699 18.0693 15.4899L9.50929 19.7699C3.74929 22.6499 1.39929 20.2899 4.27929 14.5399L5.14929 12.8099C5.39929 12.2999 5.39929 11.7099 5.14929 11.1999L4.27929 9.45989C1.39929 3.70989 3.75929 1.34989 9.50929 4.22989Z" fill={color} />
<path d="M14.8395 12.75H9.43945C9.02945 12.75 8.68945 12.41 8.68945 12C8.68945 11.59 9.02945 11.25 9.43945 11.25H14.8395C15.2495 11.25 15.5895 11.59 15.5895 12C15.5895 12.41 15.2495 12.75 14.8395 12.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default SendBulkIcon;
      