
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MoneyTimeBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M5 14C2.79 14 1 15.79 1 18C1 20.21 2.79 22 5 22C7.21 22 9 20.21 9 18C9 15.79 7.21 14 5 14ZM6 17.68C6 18.29 5.67002 18.87 5.15002 19.18L4.39001 19.64C4.27001 19.71 4.14001 19.75 4.01001 19.75C3.76001 19.75 3.51 19.62 3.37 19.39C3.16 19.04 3.27 18.57 3.63 18.36L4.39001 17.9C4.46001 17.86 4.51001 17.77 4.51001 17.69V16.76C4.51001 16.35 4.85001 16.01 5.26001 16.01C5.67001 16.01 6.01001 16.35 6.01001 16.76V17.68H6Z" fill={color} />
<path opacity="0.4" d="M22 9V15C22 18.5 20 20 17 20H8.45001C8.80001 19.41 9 18.73 9 18C9 15.79 7.21 14 5 14C3.8 14 2.73 14.53 2 15.36V9C2 5.5 4 4 7 4H17C20 4 22 5.5 22 9Z" fill={color} />
<path d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z" fill={color} />
<path d="M18.5 14.75C18.09 14.75 17.75 14.41 17.75 14V10C17.75 9.59 18.09 9.25 18.5 9.25C18.91 9.25 19.25 9.59 19.25 10V14C19.25 14.41 18.91 14.75 18.5 14.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default MoneyTimeBulkIcon;
      