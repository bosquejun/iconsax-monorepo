
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MonitorBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M21.97 6.41V12.91H2V6.41C2 3.98 3.98 2 6.41 2H17.56C19.99 2 21.97 3.98 21.97 6.41Z" fill={color} />
<path d="M2 12.9199V13.1199C2 15.5599 3.98 17.5299 6.41 17.5299H10.25C10.8 17.5299 11.25 17.9799 11.25 18.5299V19.4999C11.25 20.0499 10.8 20.4999 10.25 20.4999H7.83C7.42 20.4999 7.08 20.8399 7.08 21.2499C7.08 21.6599 7.41 21.9999 7.83 21.9999H16.18C16.59 21.9999 16.93 21.6599 16.93 21.2499C16.93 20.8399 16.59 20.4999 16.18 20.4999H13.76C13.21 20.4999 12.76 20.0499 12.76 19.4999V18.5299C12.76 17.9799 13.21 17.5299 13.76 17.5299H17.57C20.01 17.5299 21.98 15.5499 21.98 13.1199V12.9199H2Z" fill={color} />
        </svg>
      )
    }
    
    
    export default MonitorBulkIcon;
      