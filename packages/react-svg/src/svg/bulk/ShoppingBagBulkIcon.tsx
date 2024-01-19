
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ShoppingBagBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M16.4908 22H7.51082C4.00082 22 3.24082 19.99 3.53082 17.53L4.43081 10.03C4.66081 8.09 5.00082 6.5 8.40082 6.5H15.6008C19.0008 6.5 19.3408 8.09 19.5708 10.03L20.3208 16.28L20.4708 17.53C20.4808 17.61 20.4908 17.69 20.5008 17.77C20.7108 20.12 19.8908 22 16.4908 22Z" fill={color} />
<path d="M16 8.75C15.59 8.75 15.25 8.41 15.25 8V4.5C15.25 3.42 14.58 2.75 13.5 2.75H10.5C9.42 2.75 8.75 3.42 8.75 4.5V8C8.75 8.41 8.41 8.75 8 8.75C7.59 8.75 7.25 8.41 7.25 8V4.5C7.25 2.59 8.59 1.25 10.5 1.25H13.5C15.41 1.25 16.75 2.59 16.75 4.5V8C16.75 8.41 16.41 8.75 16 8.75Z" fill={color} />
<path d="M20.5 17.77C20.47 17.78 20.44 17.78 20.41 17.78H8C7.59 17.78 7.25 17.44 7.25 17.03C7.25 16.61 7.59 16.28 8 16.28H20.32L20.47 17.53C20.48 17.61 20.49 17.69 20.5 17.77Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ShoppingBagBulkIcon;
      