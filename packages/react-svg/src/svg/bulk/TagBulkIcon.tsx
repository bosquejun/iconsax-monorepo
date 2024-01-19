
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const TagBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M4.17038 15.2998L8.70038 19.8298C10.5604 21.6898 13.5804 21.6898 15.4504 19.8298L19.8404 15.4398C21.7004 13.5798 21.7004 10.5598 19.8404 8.6898L15.3004 4.1698C14.3504 3.2198 13.0404 2.7098 11.7004 2.7798L6.70038 3.0198C4.70038 3.1098 3.11038 4.6998 3.01038 6.6898L2.77038 11.6898C2.71038 13.0398 3.22038 14.3498 4.17038 15.2998Z" fill={color} />
<path d="M9.49914 12.3801C11.0897 12.3801 12.3791 11.0907 12.3791 9.50012C12.3791 7.90954 11.0897 6.62012 9.49914 6.62012C7.90856 6.62012 6.61914 7.90954 6.61914 9.50012C6.61914 11.0907 7.90856 12.3801 9.49914 12.3801Z" fill={color} />
        </svg>
      )
    }
    
    
    export default TagBulkIcon;
      