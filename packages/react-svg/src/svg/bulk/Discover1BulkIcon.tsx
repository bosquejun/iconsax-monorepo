
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Discover1BulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill={color} />
<path d="M14.3246 14.3265C16.2069 12.4442 16.6913 9.87676 15.4065 8.59195C14.1217 7.30713 11.5542 7.7915 9.67189 9.67381C7.78958 11.5561 7.30522 14.1236 8.59003 15.4084C9.87484 16.6932 12.4423 16.2088 14.3246 14.3265Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Discover1BulkIcon;
      