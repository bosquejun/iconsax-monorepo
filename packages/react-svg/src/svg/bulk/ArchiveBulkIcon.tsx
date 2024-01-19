
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ArchiveBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M19.5 9.96997V19C19.5 21 19 22 16.5 22H7.5C5 22 4.5 21 4.5 19V9.96997C4.66 9.98997 4.83 9.99997 5 9.99997H19C19.17 9.99997 19.34 9.98997 19.5 9.96997Z" fill={color} />
<path d="M22 5V7C22 8.83 21.17 9.82 19.5 9.97C19.34 9.99 19.17 10 19 10H5C4.83 10 4.66 9.99 4.5 9.97C2.83 9.82 2 8.83 2 7V5C2 3 3 2 5 2H19C21 2 22 3 22 5Z" fill={color} />
<path d="M13.8197 14.75H10.1797C9.76969 14.75 9.42969 14.41 9.42969 14C9.42969 13.59 9.76969 13.25 10.1797 13.25H13.8197C14.2297 13.25 14.5697 13.59 14.5697 14C14.5697 14.41 14.2297 14.75 13.8197 14.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ArchiveBulkIcon;
      