
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MoneyForbiddenBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M1.70026 20.24C1.71026 20.23 1.71027 20.22 1.71027 20.22L7.21027 14.72C7.22027 14.71 7.23023 14.71 7.24023 14.7C6.60023 14.26 5.82023 14 4.99023 14C2.78023 14 0.990234 15.79 0.990234 18C0.990234 18.75 1.20025 19.46 1.57025 20.06C1.62025 20.12 1.66026 20.18 1.70026 20.24Z" fill={color} />
<path d="M8.29999 15.75C8.28999 15.76 8.29003 15.77 8.28003 15.78L2.78003 21.28C2.77003 21.29 2.76 21.29 2.75 21.3C3.39 21.74 4.16 22 5 22C6.46 22 7.72998 21.22 8.41998 20.06C8.78998 19.46 9 18.75 9 18C9 17.16 8.73999 16.39 8.29999 15.75Z" fill={color} />
<path opacity="0.4" d="M22 9V15C22 18.5 20 20 17 20H8.45001C8.80001 19.41 9 18.73 9 18C9 15.79 7.21 14 5 14C3.8 14 2.73 14.53 2 15.36V9C2 5.5 4 4 7 4H17C20 4 22 5.5 22 9Z" fill={color} />
<path d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z" fill={color} />
<path d="M18.5 14.75C18.09 14.75 17.75 14.41 17.75 14V10C17.75 9.59 18.09 9.25 18.5 9.25C18.91 9.25 19.25 9.59 19.25 10V14C19.25 14.41 18.91 14.75 18.5 14.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default MoneyForbiddenBulkIcon;
      