
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ArrowUp1BulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M22 7.81V16.18C22 19.82 19.83 21.99 16.19 21.99H7.81C4.17 22 2 19.83 2 16.19V7.81C2 4.17 4.17 2 7.81 2H16.18C19.83 2 22 4.17 22 7.81Z" fill={color} />
<path d="M12.5309 5.47L16.8209 9.76C17.1109 10.05 17.1109 10.53 16.8209 10.82C16.5309 11.11 16.0509 11.11 15.7609 10.82L12.7509 7.81V18C12.7509 18.41 12.4109 18.75 12.0009 18.75C11.5909 18.75 11.2509 18.41 11.2509 18V7.81L8.24094 10.82C7.95094 11.11 7.47094 11.11 7.18094 10.82C7.03094 10.67 6.96094 10.48 6.96094 10.29C6.96094 10.1 7.04094 9.9 7.18094 9.76L11.4709 5.47C11.6109 5.33 11.8009 5.25 12.0009 5.25C12.2009 5.25 12.3909 5.33 12.5309 5.47Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ArrowUp1BulkIcon;
      