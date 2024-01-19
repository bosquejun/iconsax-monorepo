
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Crown1BulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M22.0003 5.71V15.29C22.0003 18.05 19.7603 20.29 17.0003 20.29H7.00031C6.54031 20.29 6.10031 20.23 5.67031 20.11C5.05031 19.94 4.85031 19.15 5.31031 18.69L15.9403 8.06C16.1603 7.84 16.4903 7.79 16.8003 7.85C17.1203 7.91 17.4703 7.82 17.7203 7.58L20.2903 5C21.2303 4.06 22.0003 4.37 22.0003 5.71Z" fill={color} />
<path opacity="0.4" d="M14.64 7.36002L4.17 17.83C3.69 18.31 2.89 18.19 2.57 17.59C2.2 16.91 2 16.12 2 15.29V5.71002C2 4.37002 2.77 4.06002 3.71 5.00002L6.29 7.59002C6.68 7.97002 7.32 7.97002 7.71 7.59002L11.29 4.00002C11.68 3.61002 12.32 3.61002 12.71 4.00002L14.65 5.94002C15.03 6.33002 15.03 6.97002 14.64 7.36002Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Crown1BulkIcon;
      