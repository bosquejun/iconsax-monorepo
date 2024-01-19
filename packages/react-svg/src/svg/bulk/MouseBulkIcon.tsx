
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MouseBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M19.5 9.5V14.5C19.5 18.63 16.13 22 12 22C7.87 22 4.5 18.63 4.5 14.5V9.5C4.5 7.44 5.34 5.56 6.7 4.2C7.89 3.01 9.48 2.22 11.25 2.04C11.49 2.01 11.75 2 12 2C12.25 2 12.51 2.01 12.75 2.04C16.53 2.42 19.5 5.62 19.5 9.5Z" fill={color} />
<path d="M13.8691 7.5V9.5C13.8691 10.53 13.0291 11.38 11.9991 11.38C10.9591 11.38 10.1191 10.53 10.1191 9.5V7.5C10.1191 6.73 10.5891 6.07 11.2491 5.78V2.04C11.4891 2.01 11.7491 2 11.9991 2C12.2491 2 12.5091 2.01 12.7491 2.04V5.78C13.4091 6.07 13.8691 6.73 13.8691 7.5Z" fill={color} />
        </svg>
      )
    }
    
    
    export default MouseBulkIcon;
      