
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const BezierBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M3 9C4.10457 9 5 8.10457 5 7C5 5.89543 4.10457 5 3 5C1.89543 5 1 5.89543 1 7C1 8.10457 1.89543 9 3 9Z" fill={color} />
<path d="M21 9C22.1046 9 23 8.10457 23 7C23 5.89543 22.1046 5 21 5C19.8954 5 19 5.89543 19 7C19 8.10457 19.8954 9 21 9Z" fill={color} />
<path d="M7.5 16.5V18.5C7.5 19.11 7.13 19.64 6.61 19.86C6.42 19.95 6.22 20 6 20H4C3.17 20 2.5 19.33 2.5 18.5V16.5C2.5 15.67 3.17 15 4 15H6C6.83 15 7.5 15.67 7.5 16.5Z" fill={color} />
<path d="M21.5 16.5V18.5C21.5 19.33 20.83 20 20 20H18C17.78 20 17.58 19.95 17.39 19.86C16.87 19.64 16.5 19.11 16.5 18.5V16.5C16.5 15.67 17.17 15 18 15H20C20.83 15 21.5 15.67 21.5 16.5Z" fill={color} />
<path d="M15 5.5V8.5C15 9.32 14.32 10 13.5 10H10.5C9.68 10 9 9.32 9 8.5V5.5C9 4.68 9.68 4 10.5 4H13.5C14.32 4 15 4.68 15 5.5Z" fill={color} />
        </svg>
      )
    }
    
    
    export default BezierBulkIcon;
      