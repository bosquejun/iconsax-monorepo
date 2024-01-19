
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const SpeedometerBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M19.14 20.25C18.95 20.25 18.76 20.18 18.61 20.04C18.31 19.75 18.31 19.28 18.6 18.98C20.31 17.24 21.25 14.94 21.25 12.5C21.25 7.4 17.1 3.25 12 3.25C6.9 3.25 2.75 7.4 2.75 12.5C2.75 14.93 3.68 17.22 5.38 18.96C5.67 19.26 5.66 19.73 5.37 20.02C5.07 20.31 4.6 20.3 4.31 20.01C2.34 17.99 1.25 15.32 1.25 12.5C1.25 6.57 6.07 1.75 12 1.75C17.93 1.75 22.75 6.57 22.75 12.5C22.75 15.33 21.66 18.01 19.67 20.03C19.53 20.18 19.33 20.25 19.14 20.25Z" fill={color} />
<path d="M11.9991 21.9983C14.142 21.9983 15.8791 20.2611 15.8791 18.1183C15.8791 15.9754 14.142 14.2383 11.9991 14.2383C9.85628 14.2383 8.11914 15.9754 8.11914 18.1183C8.11914 20.2611 9.85628 21.9983 11.9991 21.9983Z" fill={color} />
<path d="M16 8.5C14.9 8.5 14 9.4 14 10.5V11.25C14 11.94 14.56 12.5 15.25 12.5H16C17.1 12.5 18 11.6 18 10.5C18 9.4 17.1 8.5 16 8.5Z" fill={color} />
        </svg>
      )
    }
    
    
    export default SpeedometerBoldIcon;
      