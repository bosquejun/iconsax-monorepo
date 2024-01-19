
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Shapes1BulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M11.75 7H11H7C4.24 7 2 9.24 2 12V17C2 19.76 4.24 22 7 22H12C14.76 22 17 19.76 17 17V13V12.25C17 9.35 14.65 7 11.75 7Z" fill={color} />
<path d="M16.4993 2C13.6293 2 11.2793 4.2 11.0293 7H11.7493C14.6493 7 16.9993 9.35 16.9993 12.25V12.97C19.7993 12.72 21.9993 10.36 21.9993 7.5C21.9993 4.46 19.5393 2 16.4993 2Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Shapes1BulkIcon;
      