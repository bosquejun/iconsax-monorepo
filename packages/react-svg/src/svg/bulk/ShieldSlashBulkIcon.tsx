
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ShieldSlashBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M19.3608 4.64009L5.83078 18.1701L4.73078 17.3501C4.08078 16.8601 3.55078 15.8001 3.55078 14.9801V6.89009C3.55078 5.76009 4.41078 4.52009 5.46078 4.12009L10.9608 2.06009C11.5308 1.85009 12.4708 1.85009 13.0408 2.06009L18.5408 4.12009C18.8308 4.23009 19.1108 4.41009 19.3608 4.64009Z" fill={color} />
<path opacity="0.4" d="M20.4491 6.89008V14.9801C20.4491 15.8001 19.9191 16.8601 19.2691 17.3501L13.7691 21.4601C12.7891 22.1801 11.2091 22.1801 10.2291 21.4601L7.53906 19.4601L20.4191 6.58008C20.4391 6.68008 20.4491 6.79008 20.4491 6.89008Z" fill={color} />
<path d="M21.7709 2.22988C21.4709 1.92988 20.9809 1.92988 20.6809 2.22988L2.23086 20.6899C1.93086 20.9899 1.93086 21.4799 2.23086 21.7799C2.38086 21.9199 2.57086 21.9999 2.77086 21.9999C2.97086 21.9999 3.16086 21.9199 3.31086 21.7699L21.7709 3.30988C22.0809 3.00988 22.0809 2.52988 21.7709 2.22988Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ShieldSlashBulkIcon;
      