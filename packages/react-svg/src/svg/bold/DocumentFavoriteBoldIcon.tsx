
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const DocumentFavoriteBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19ZM12.48 15.7C11.96 17.37 10.13 18.27 9.5 18.27C8.86 18.27 7.07 17.4 6.52 15.7C6.16 14.59 6.57 13.14 7.84 12.73C8.42 12.54 9.04 12.65 9.49 13C9.94 12.65 10.56 12.54 11.15 12.73C12.43 13.14 12.83 14.59 12.48 15.7Z" fill={color} />
<path d="M17.4297 8.81048C18.3797 8.82048 19.6997 8.82048 20.8297 8.82048C21.3997 8.82048 21.6997 8.15048 21.2997 7.75048C19.8597 6.30048 17.2797 3.69048 15.7997 2.21048C15.3897 1.80048 14.6797 2.08048 14.6797 2.65048V6.14048C14.6797 7.60048 15.9197 8.81048 17.4297 8.81048Z" fill={color} />
        </svg>
      )
    }
    
    
    export default DocumentFavoriteBoldIcon;
      