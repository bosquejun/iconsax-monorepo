
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Path2BoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M14.1505 22.0003H9.83047C8.29047 22.0003 7.15047 20.7503 7.45047 19.4203L7.97047 17.1003C8.07047 16.6403 8.48047 16.3203 8.95047 16.3203H15.0405C15.5105 16.3203 15.9105 16.6403 16.0205 17.1003L16.5405 19.4103C16.8605 20.8403 15.7905 22.0003 14.1505 22.0003Z" fill={color} />
<path d="M18.8198 13.69L17.7498 14.63C17.3798 14.95 16.9098 15.13 16.4298 15.13H7.58983C7.09983 15.13 6.61983 14.95 6.25983 14.62L5.20983 13.68C3.48983 12.27 3.47983 11.19 4.79983 9.53L10.0298 2.92C10.0664 2.87094 10.1039 2.82374 10.1423 2.77836C10.5832 2.25735 11.2698 2.70487 11.2698 3.38743V6.86C11.2598 7.29 11.5998 7.63 12.0198 7.62C12.4398 7.63 12.7698 7.29 12.7798 6.86V3.38743C12.7798 2.70487 13.4562 2.2676 13.9088 2.77848C13.9463 2.82077 13.9833 2.8646 14.0198 2.91L19.2298 9.53C20.5298 11.19 20.4798 12.22 18.8198 13.69Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Path2BoldIcon;
      