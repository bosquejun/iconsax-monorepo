
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const NotificationFavoriteBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z" fill={color} />
<path opacity="0.4" d="M19 9.5C16.52 9.5 14.5 7.48 14.5 5C14.5 4.28 14.69 3.61 14.99 3H7.52C4.07 3 2 5.06 2 8.52V16.47C2 19.94 4.07 22 7.52 22H15.47C18.93 22 20.99 19.94 20.99 16.48V9.01C20.39 9.31 19.72 9.5 19 9.5Z" fill={color} />
<path d="M10.8997 12.3601C10.3297 12.1801 9.71974 12.2801 9.28974 12.6201C8.84974 12.2801 8.24974 12.1801 7.68974 12.3601C6.45974 12.7601 6.06974 14.1601 6.41974 15.2401C6.94974 16.8801 8.67974 17.7301 9.29974 17.7301C9.90974 17.7301 11.6697 16.8601 12.1797 15.2401C12.5297 14.1601 12.1297 12.7601 10.8997 12.3601Z" fill={color} />
        </svg>
      )
    }
    
    
    export default NotificationFavoriteBulkIcon;
      