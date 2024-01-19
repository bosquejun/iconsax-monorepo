
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const DislikeBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M2.34904 13.96C2.73904 14.52 3.42904 14.84 4.21904 14.84H8.31904C8.58904 14.84 8.83904 14.95 9.00904 15.15C9.18904 15.35 9.25904 15.63 9.21904 15.92L8.70904 19.2C8.48904 20.18 9.13904 21.28 10.119 21.61C11.029 21.95 12.099 21.49 12.529 20.84L16.739 14.57L16.859 14.37V5.53003L16.709 5.38003L13.539 2.93003C13.119 2.51003 12.169 2.28003 11.499 2.28003H7.59904C6.25904 2.28003 4.90904 3.29003 4.60904 4.52003L2.14904 12.01C1.89904 12.72 1.96904 13.42 2.34904 13.96Z" fill={color} />
<path d="M18.7894 17.6099H19.8194C21.3694 17.6099 21.9994 17.0099 21.9994 15.5299V5.4799C21.9994 3.9999 21.3694 3.3999 19.8194 3.3999H18.7894C17.2394 3.3999 16.6094 3.9999 16.6094 5.4799V15.5399C16.6094 17.0099 17.2394 17.6099 18.7894 17.6099Z" fill={color} />
        </svg>
      )
    }
    
    
    export default DislikeBulkIcon;
      