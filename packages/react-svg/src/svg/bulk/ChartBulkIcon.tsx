
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ChartBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill={color} />
<path d="M7 14.3499C6.59 14.3499 6.25 14.0099 6.25 13.5999V10.3999C6.25 9.9899 6.59 9.6499 7 9.6499C7.41 9.6499 7.75 9.9899 7.75 10.3999V13.6099C7.75 14.0199 7.41 14.3499 7 14.3499Z" fill={color} />
<path d="M12 16.0902C11.59 16.0902 11.25 15.7502 11.25 15.3402V8.66016C11.25 8.25016 11.59 7.91016 12 7.91016C12.41 7.91016 12.75 8.25016 12.75 8.66016V15.3402C12.75 15.7502 12.41 16.0902 12 16.0902Z" fill={color} />
<path d="M17 14.3499C16.59 14.3499 16.25 14.0099 16.25 13.5999V10.3999C16.25 9.9899 16.59 9.6499 17 9.6499C17.41 9.6499 17.75 9.9899 17.75 10.3999V13.6099C17.75 14.0199 17.41 14.3499 17 14.3499Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ChartBulkIcon;
      