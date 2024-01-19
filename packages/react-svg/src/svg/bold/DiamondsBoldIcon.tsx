
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const DiamondsBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M21.7704 9.79844L20.9704 7.99844L19.2104 4.03844C18.7404 2.99844 18.0004 2.14844 16.3004 2.14844H7.70044C6.00044 2.14844 5.26044 2.99844 4.79044 4.03844L3.03044 7.99844L2.23044 9.79844C1.77044 10.8484 2.02044 12.3884 2.79044 13.2384L9.64044 20.7784C10.9404 22.2084 13.0604 22.2084 14.3604 20.7784L21.2104 13.2384C21.9804 12.3884 22.2304 10.8484 21.7704 9.79844Z" fill={color} />
        </svg>
      )
    }
    
    
    export default DiamondsBoldIcon;
      