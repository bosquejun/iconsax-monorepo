
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const PictureFrameBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill={color} />
<path d="M14.78 22H13.18L10.99 13.16L2.21002 15.72L2 15.79V14.22L10.63 11.7L8.21997 2H9.78003L14.78 22Z" fill={color} />
        </svg>
      )
    }
    
    
    export default PictureFrameBulkIcon;
      