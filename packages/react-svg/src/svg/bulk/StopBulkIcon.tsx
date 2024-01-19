
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const StopBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M20.9 7.66L20.12 8.13L19.63 8.43L18.7 8.98L4.76 17.34L4.67 17.39L4.14 17.71L3.53 18.08C3.17 17.19 3 16.07 3 14.7V9.3C3 4.8 4.8 3 9.3 3H14.7C18.61 3 20.48 4.36 20.9 7.66Z" fill={color} />
<path opacity="0.4" d="M21.0005 9.2002V14.7002C21.0005 19.2002 19.2005 21.0002 14.7005 21.0002H9.30047C6.86047 21.0002 5.21047 20.4702 4.23047 19.2602L4.53047 19.0802L5.14047 18.7102L5.67047 18.3902L5.76047 18.3402L19.7005 9.9802L20.6305 9.4302L21.0005 9.2002Z" fill={color} />
        </svg>
      )
    }
    
    
    export default StopBulkIcon;
      