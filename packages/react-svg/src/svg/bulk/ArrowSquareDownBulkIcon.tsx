
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ArrowSquareDownBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill={color} />
<path d="M12.0002 14.9098C11.8102 14.9098 11.6202 14.8398 11.4702 14.6898L7.94016 11.1598C7.65016 10.8698 7.65016 10.3898 7.94016 10.0998C8.23016 9.80982 8.71016 9.80982 9.00016 10.0998L12.0002 13.0998L15.0002 10.0998C15.2902 9.80982 15.7702 9.80982 16.0602 10.0998C16.3502 10.3898 16.3502 10.8698 16.0602 11.1598L12.5302 14.6898C12.3802 14.8398 12.1902 14.9098 12.0002 14.9098Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ArrowSquareDownBulkIcon;
      