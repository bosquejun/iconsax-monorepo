
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const FlashSlashBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M21.7709 2.22988C21.4709 1.92988 20.9809 1.92988 20.6809 2.22988L2.23086 20.6899C1.93086 20.9899 1.93086 21.4799 2.23086 21.7799C2.38086 21.9199 2.57086 21.9999 2.77086 21.9999C2.97086 21.9999 3.16086 21.9199 3.31086 21.7699L21.7709 3.30988C22.0809 3.00988 22.0809 2.52988 21.7709 2.22988Z" fill={color} />
<path opacity="0.4" d="M14.8205 3.5199V9.1799L9.1805 14.8199V13.2799H6.0905C4.6905 13.2799 4.3005 12.4199 5.2305 11.3699L12.0005 3.6699L12.8005 2.7599C13.9105 1.4999 14.8205 1.8399 14.8205 3.5199Z" fill={color} />
<path opacity="0.4" d="M18.7697 12.63L11.9997 20.33L11.1997 21.24C10.0897 22.5 9.17969 22.16 9.17969 20.48V17.82L16.2797 10.72H17.9097C19.3097 10.72 19.6997 11.58 18.7697 12.63Z" fill={color} />
        </svg>
      )
    }
    
    
    export default FlashSlashBulkIcon;
      