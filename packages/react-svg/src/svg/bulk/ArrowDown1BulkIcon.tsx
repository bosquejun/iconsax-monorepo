
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ArrowDown1BulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M15.4807 13.2302L11.6907 8.18018H6.08072C5.12072 8.18018 4.64073 9.34018 5.32073 10.0202L10.5007 15.2002C11.3307 16.0302 12.6807 16.0302 13.5107 15.2002L15.4807 13.2302Z" fill={color} />
<path d="M17.9195 8.18018H11.6895L15.4795 13.2302L18.6895 10.0202C19.3595 9.34018 18.8795 8.18018 17.9195 8.18018Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ArrowDown1BulkIcon;
      