
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MainComponentBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M20.95 14.55L18.28 17.22L17.22 18.28L14.55 20.95C13.15 22.35 10.85 22.35 9.45002 20.95L6.78001 18.28L5.72001 17.22L3.05 14.55C1.65 13.15 1.65 10.85 3.05 9.45002L5.72001 6.78001L6.78001 5.72001L9.45002 3.05C10.85 1.65 13.15 1.65 14.55 3.05L17.22 5.72001L18.28 6.78001L20.95 9.45002C22.35 10.85 22.35 13.15 20.95 14.55Z" fill={color} />
<path d="M13.0607 12.0002L18.2807 17.2202L17.2207 18.2802L12.0007 13.0602L6.7807 18.2802L5.7207 17.2202L10.9407 12.0002L5.7207 6.78021L6.7807 5.72021L12.0007 10.9402L17.2207 5.72021L18.2807 6.78021L13.0607 12.0002Z" fill={color} />
        </svg>
      )
    }
    
    
    export default MainComponentBulkIcon;
      