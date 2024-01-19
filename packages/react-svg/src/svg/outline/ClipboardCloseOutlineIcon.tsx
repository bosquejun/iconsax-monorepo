
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ClipboardCloseOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M14.0005 16.9101C13.8105 16.9101 13.6205 16.8401 13.4705 16.6901L9.51047 12.7301C9.22047 12.4401 9.22047 11.9601 9.51047 11.6701C9.80047 11.3801 10.2805 11.3801 10.5705 11.6701L14.5305 15.6301C14.8205 15.9201 14.8205 16.4001 14.5305 16.6901C14.3805 16.8301 14.1905 16.9101 14.0005 16.9101Z" fill={color} />
<path d="M9.99945 16.9502C9.80945 16.9502 9.61945 16.8802 9.46945 16.7302C9.17945 16.4402 9.17945 15.9602 9.46945 15.6702L13.4295 11.7102C13.7195 11.4202 14.1995 11.4202 14.4895 11.7102C14.7795 12.0002 14.7795 12.4802 14.4895 12.7702L10.5295 16.7302C10.3795 16.8802 10.1895 16.9502 9.99945 16.9502Z" fill={color} />
<path d="M14 6.75H10C9.04 6.75 7.25 6.75 7.25 4C7.25 1.25 9.04 1.25 10 1.25H14C14.96 1.25 16.75 1.25 16.75 4C16.75 4.96 16.75 6.75 14 6.75ZM10 2.75C9.01 2.75 8.75 2.75 8.75 4C8.75 5.25 9.01 5.25 10 5.25H14C15.25 5.25 15.25 4.99 15.25 4C15.25 2.75 14.99 2.75 14 2.75H10Z" fill={color} />
<path d="M15 22.7499H9C3.38 22.7499 2.25 20.1699 2.25 15.9999V9.99993C2.25 5.43993 3.9 3.48993 7.96 3.27993C8.38 3.25993 8.73 3.56993 8.75 3.98993C8.77 4.40993 8.45 4.74993 8.04 4.76993C5.2 4.92993 3.75 5.77993 3.75 9.99993V15.9999C3.75 19.6999 4.48 21.2499 9 21.2499H15C19.52 21.2499 20.25 19.6999 20.25 15.9999V9.99993C20.25 5.77993 18.8 4.92993 15.96 4.76993C15.55 4.74993 15.23 4.38993 15.25 3.97993C15.27 3.56993 15.63 3.24993 16.04 3.26993C20.1 3.48993 21.75 5.43993 21.75 9.98993V15.9899C21.75 20.1699 20.62 22.7499 15 22.7499Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ClipboardCloseOutlineIcon;
      