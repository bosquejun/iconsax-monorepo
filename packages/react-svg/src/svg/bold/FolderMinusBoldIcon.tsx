
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const FolderMinusBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M21.0169 7.99175C21.4148 8.55833 20.9405 9.25 20.2482 9.25H3C2.44772 9.25 2 8.80228 2 8.25V6.42C2 3.98 3.98 2 6.42 2H8.74C10.37 2 10.88 2.53 11.53 3.4L12.93 5.26C13.24 5.67 13.28 5.72 13.86 5.72H16.65C18.4546 5.72 20.0516 6.61709 21.0169 7.99175Z" fill={color} />
<path d="M21.9834 11.7466C21.9815 11.1957 21.5343 10.75 20.9833 10.75L2.99996 10.7507C2.44769 10.7507 2 11.1984 2 11.7507V16.6507C2 19.6007 4.4 22.0007 7.35 22.0007H16.65C19.6 22.0007 22 19.6007 22 16.6507L21.9834 11.7466ZM14.43 16.7507H9.43C9.01 16.7507 8.68 16.4207 8.68 16.0007C8.68 15.5907 9.01 15.2507 9.43 15.2507H14.43C14.84 15.2507 15.18 15.5907 15.18 16.0007C15.18 16.4207 14.84 16.7507 14.43 16.7507Z" fill={color} />
        </svg>
      )
    }
    
    
    export default FolderMinusBoldIcon;
      