
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ForwardItemBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M21.2505 5.77V9C21.2505 11.29 20.5205 12.02 18.2305 12.02H18.1305V10.38C18.1305 7.26 16.7405 5.87 13.6205 5.87H11.9805V5.77C11.9805 3.48 12.7105 2.75 15.0005 2.75H18.2305C20.5205 2.75 21.2505 3.48 21.2505 5.77Z" fill={color} />
<path d="M16.6291 10.3801V13.6201C16.6291 15.9001 15.8991 16.6301 13.6191 16.6301H10.3791C8.09914 16.6301 7.36914 15.9001 7.36914 13.6201V10.3801C7.36914 8.10013 8.09914 7.37012 10.3791 7.37012H13.6191C15.8991 7.37012 16.6291 8.10013 16.6291 10.3801Z" fill={color} />
<path opacity="0.4" d="M12.02 18.13V18.23C12.02 20.52 11.29 21.25 9 21.25H5.77C3.48 21.25 2.75 20.52 2.75 18.23V15C2.75 12.71 3.48 11.98 5.77 11.98H5.87V13.62C5.87 16.74 7.26 18.13 10.38 18.13H12.02Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ForwardItemBulkIcon;
      