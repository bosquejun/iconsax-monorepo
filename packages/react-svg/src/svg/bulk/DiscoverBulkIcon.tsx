
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const DiscoverBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M20.9808 3.0201C20.1108 2.1501 18.8808 1.8101 17.6908 2.1101L7.89084 4.5601C6.24084 4.9701 4.97084 6.2501 4.56084 7.8901L2.11084 17.7001C1.81084 18.8901 2.15084 20.1201 3.02084 20.9901C3.68084 21.6401 4.55084 22.0001 5.45084 22.0001C5.73084 22.0001 6.02084 21.9701 6.30084 21.8901L16.1108 19.4401C17.7508 19.0301 19.0308 17.7601 19.4408 16.1101L21.8908 6.3001C22.1908 5.1101 21.8508 3.8801 20.9808 3.0201Z" fill={color} />
<path d="M11.9991 15.8801C14.142 15.8801 15.8791 14.143 15.8791 12.0001C15.8791 9.85725 14.142 8.12012 11.9991 8.12012C9.85628 8.12012 8.11914 9.85725 8.11914 12.0001C8.11914 14.143 9.85628 15.8801 11.9991 15.8801Z" fill={color} />
        </svg>
      )
    }
    
    
    export default DiscoverBulkIcon;
      