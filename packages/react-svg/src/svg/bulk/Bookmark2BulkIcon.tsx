
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Bookmark2BulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M17 4.96V12.08C17 14.07 15.59 14.84 13.86 13.8L12.54 13C12.24 12.82 11.76 12.82 11.46 13L10.14 13.8C8.41 14.84 7 14.07 7 12.08V4.99C7.01 3 8.01 2 10 2H14C15.98 2 16.98 2.99 17 4.96Z" fill={color} />
<path opacity="0.4" d="M22 11.9V14.93C22 19.98 20 22 15 22H9C4 22 2 19.98 2 14.93V11.9C2 7.65996 3.41 5.55996 6.82 4.98996H7V12.08C7 14.07 8.41 14.84 10.14 13.8L11.46 13C11.76 12.82 12.24 12.82 12.54 13L13.86 13.8C15.59 14.84 17 14.07 17 12.08V4.95996C20.54 5.47996 22 7.58996 22 11.9Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Bookmark2BulkIcon;
      