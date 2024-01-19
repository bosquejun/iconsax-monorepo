
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ReceiptSquareBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M2 12.94V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M16.9998 13.0401V15.7001C16.9998 17.2701 16.1398 17.6401 15.0998 16.5201C14.6198 16.0101 13.8797 16.0501 13.4597 16.6101L12.8597 17.4101C12.3897 18.0401 11.6098 18.0401 11.1398 17.4101L10.5497 16.6201C10.1297 16.0601 9.38976 16.0201 8.90976 16.5301C7.85976 17.6501 7.00977 17.2801 7.00977 15.7101V9.08012C7.00977 6.71012 7.56976 6.12012 9.78976 6.12012H14.2298C16.4498 6.12012 17.0098 6.71012 17.0098 9.08012" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default ReceiptSquareBrokenIcon;
      