
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ShipBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M21.6297 14.6608L21.2197 16.5208C20.5097 19.7208 17.9997 22.0008 14.3797 22.0008H9.61974C5.99974 22.0008 3.48974 19.7208 2.77974 16.5208L2.36974 14.6608C2.16974 13.7508 2.70974 12.7208 3.57974 12.3708L4.99974 11.8008L10.5097 9.59078C10.9897 9.40078 11.4997 9.30078 11.9997 9.30078C12.4997 9.30078 13.0097 9.40078 13.4897 9.59078L18.9997 11.8008L20.4197 12.3708C21.2897 12.7208 21.8297 13.7508 21.6297 14.6608Z" fill={color} />
<path d="M19 8V9.44C19 9.79 18.64 10.04 18.31 9.9L14.04 8.19C12.73 7.68 11.27 7.68 9.95 8.2L5.69 9.91C5.36 10.05 5 9.8 5 9.45V8C5 6.35 6.35 5 8 5H16C17.65 5 19 6.35 19 8Z" fill={color} />
<path d="M14.5 5H9.5V3C9.5 2.45 9.95 2 10.5 2H13.5C14.05 2 14.5 2.45 14.5 3V5Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ShipBoldIcon;
      