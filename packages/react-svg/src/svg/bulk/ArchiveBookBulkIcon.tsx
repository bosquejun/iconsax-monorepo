
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ArchiveBookBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z" fill={color} />
<path d="M15.5 2V9.85999C15.5 10.3 14.98 10.52 14.66 10.23L12.34 8.09C12.15 7.91 11.85 7.91 11.66 8.09L9.34003 10.23C9.02003 10.53 8.5 10.3 8.5 9.85999V2H15.5Z" fill={color} />
<path d="M17.5 14.75H13.25C12.84 14.75 12.5 14.41 12.5 14C12.5 13.59 12.84 13.25 13.25 13.25H17.5C17.91 13.25 18.25 13.59 18.25 14C18.25 14.41 17.91 14.75 17.5 14.75Z" fill={color} />
<path d="M17.5 18.75H9C8.59 18.75 8.25 18.41 8.25 18C8.25 17.59 8.59 17.25 9 17.25H17.5C17.91 17.25 18.25 17.59 18.25 18C18.25 18.41 17.91 18.75 17.5 18.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ArchiveBookBulkIcon;
      