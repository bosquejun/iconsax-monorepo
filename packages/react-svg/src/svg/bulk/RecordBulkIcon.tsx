
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const RecordBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M20.12 8.13L18.7 8.98L4.76 17.34C3.66 15.85 3 14 3 12C3 7.03 7.03 3 12 3C15.58 3 18.68 5.1 20.12 8.13Z" fill={color} />
<path opacity="0.4" d="M20.9999 12.0002C20.9999 16.9702 16.9699 21.0002 11.9999 21.0002C9.52992 21.0002 7.29992 20.0102 5.66992 18.3902L5.75992 18.3402L19.6999 9.98018L20.6299 9.43018C20.8699 10.2502 20.9999 11.1102 20.9999 12.0002Z" fill={color} />
        </svg>
      )
    }
    
    
    export default RecordBulkIcon;
      