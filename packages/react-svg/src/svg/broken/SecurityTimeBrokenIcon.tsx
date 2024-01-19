
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const SecurityTimeBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M3.41016 11.3701V14.5501C3.41016 15.7301 4.19017 17.2801 5.14017 17.9901L9.44016 21.2001C10.8502 22.2601 13.1701 22.2601 14.5801 21.2001L18.8802 17.9901C19.8302 17.2801 20.6101 15.7301 20.6101 14.5501V7.12006C20.6101 5.89006 19.6701 4.53006 18.5201 4.10006L13.5302 2.23006C12.7002 1.92006 11.3402 1.92006 10.5102 2.23006L5.52014 4.10006C4.37014 4.53006 3.43015 5.89006 3.43015 7.12006" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M16 11.5C16 9.29 14.21 7.5 12 7.5C9.79 7.5 8 9.29 8 11.5C8 13.71 9.79 15.5 12 15.5C12.71 15.5 13.37 15.32 13.95 14.99" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12.25 10.25V11.18C12.25 11.53 12.07 11.86 11.76 12.04L11 12.5" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default SecurityTimeBrokenIcon;
      