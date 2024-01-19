
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Hierarchy2BulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M18.75 22C20.5449 22 22 20.5449 22 18.75C22 16.9551 20.5449 15.5 18.75 15.5C16.9551 15.5 15.5 16.9551 15.5 18.75C15.5 20.5449 16.9551 22 18.75 22Z" fill={color} />
<path d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z" fill={color} />
<path d="M5 8C6.65685 8 8 6.65685 8 5C8 3.34315 6.65685 2 5 2C3.34315 2 2 3.34315 2 5C2 6.65685 3.34315 8 5 8Z" fill={color} />
<path opacity="0.4" d="M4.83039 8.02002C5.80039 10.8 8.42039 12.67 11.3704 12.67C11.3804 12.67 11.3904 12.67 11.4004 12.67L14.9304 12.66C16.4504 12.64 17.8104 13.67 18.2204 15.15V17C18.2204 17.42 18.5604 17.76 18.9804 17.76C19.4004 17.76 19.7404 17.42 19.7404 17V5.78001C19.7404 5.36001 19.4004 5.02002 18.9804 5.02002C18.5604 5.02002 18.2204 5.36001 18.2204 5.78001V12.4C17.3404 11.62 16.1904 11.14 14.9404 11.14C14.9304 11.14 14.9304 11.14 14.9204 11.14L11.3904 11.15C11.3804 11.15 11.3804 11.15 11.3704 11.15C9.08039 11.15 7.03039 9.70001 6.28039 7.53001C6.17039 7.21001 5.87039 7.02002 5.56039 7.02002C5.48039 7.02002 5.39039 7.03001 5.31039 7.06001C4.90039 7.18001 4.69039 7.62002 4.83039 8.02002Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Hierarchy2BulkIcon;
      