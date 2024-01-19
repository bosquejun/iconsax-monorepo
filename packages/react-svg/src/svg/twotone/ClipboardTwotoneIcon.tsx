
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ClipboardTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M18.63 7.15014C18.67 7.76014 18.62 8.45014 18.5 9.22014L17.77 13.9101C17.15 17.8201 15.34 19.1401 11.43 18.5301L6.73999 17.7901C5.38999 17.5801 4.34999 17.2201 3.58999 16.6801C2.13999 15.6701 1.71999 14.0101 2.11999 11.4501L2.85999 6.76014C3.47999 2.85014 5.28999 1.53014 9.19999 2.14014L13.89 2.88014C17.03 3.37014 18.5 4.65014 18.63 7.15014Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M20.4998 13.4699L18.9998 17.9799C17.7498 21.7399 15.7498 22.7399 11.9898 21.4899L7.47984 19.9899C5.20984 19.2399 3.94984 18.1999 3.58984 16.6799C4.34984 17.2199 5.38984 17.5799 6.73984 17.7899L11.4298 18.5299C15.3398 19.1399 17.1498 17.8199 17.7698 13.9099L18.4998 9.2199C18.6198 8.4499 18.6698 7.7599 18.6298 7.1499C21.0198 8.4199 21.5398 10.3399 20.4998 13.4699Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M8.24 8.98C9.20098 8.98 9.98 8.20098 9.98 7.24C9.98 6.27902 9.20098 5.5 8.24 5.5C7.27902 5.5 6.5 6.27902 6.5 7.24C6.5 8.20098 7.27902 8.98 8.24 8.98Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default ClipboardTwotoneIcon;
      