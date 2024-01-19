
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const DocumentSketchBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19ZM12.4 15.58L10.54 17.44C10.31 17.67 9.99 17.8 9.65 17.8C9.31 17.8 9 17.67 8.76 17.44L6.9 15.58C6.49 15.17 6.42 14.48 6.75 14L7.6 12.72C7.81 12.39 8.25 12.16 8.64 12.16H10.65C11.04 12.16 11.47 12.39 11.69 12.72L12.55 14C12.86 14.48 12.8 15.17 12.4 15.58Z" fill={color} />
<path d="M17.4297 8.81048C18.3797 8.82048 19.6997 8.82048 20.8297 8.82048C21.3997 8.82048 21.6997 8.15048 21.2997 7.75048C19.8597 6.30048 17.2797 3.69048 15.7997 2.21048C15.3897 1.80048 14.6797 2.08048 14.6797 2.65048V6.14048C14.6797 7.60048 15.9197 8.81048 17.4297 8.81048Z" fill={color} />
        </svg>
      )
    }
    
    
    export default DocumentSketchBoldIcon;
      