
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const WatchStatusBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M8.5 19H15.5C17.83 19 19 17.83 19 15.5V8.5C19 6.17 17.83 5 15.5 5H8.5C6.17 5 5 6.17 5 8.5V15.5C5 17.83 6.17 19 8.5 19Z" fill={color} />
<path d="M16 3.75H8C7.59 3.75 7.25 3.41 7.25 3C7.25 2.59 7.59 2.25 8 2.25H16C16.41 2.25 16.75 2.59 16.75 3C16.75 3.41 16.41 3.75 16 3.75Z" fill={color} />
<path d="M16 21.75H8C7.59 21.75 7.25 21.41 7.25 21C7.25 20.59 7.59 20.25 8 20.25H16C16.41 20.25 16.75 20.59 16.75 21C16.75 21.41 16.41 21.75 16 21.75Z" fill={color} />
<path d="M12 14.75C11.59 14.75 11.25 14.41 11.25 14V10C11.25 9.59 11.59 9.25 12 9.25C12.41 9.25 12.75 9.59 12.75 10V14C12.75 14.42 12.41 14.75 12 14.75Z" fill={color} />
<path d="M15 14.75C14.59 14.75 14.25 14.41 14.25 14V12C14.25 11.59 14.59 11.25 15 11.25C15.41 11.25 15.75 11.59 15.75 12V14C15.75 14.42 15.42 14.75 15 14.75Z" fill={color} />
<path d="M9 14.75C8.59 14.75 8.25 14.41 8.25 14V13C8.25 12.59 8.59 12.25 9 12.25C9.41 12.25 9.75 12.59 9.75 13V14C9.75 14.42 9.41 14.75 9 14.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default WatchStatusBulkIcon;
      