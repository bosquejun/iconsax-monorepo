
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const HeadphoneTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M5.46005 18.4898V15.5698C5.46005 14.5998 6.22005 13.7298 7.30005 13.7298C8.27005 13.7298 9.14005 14.4898 9.14005 15.5698V18.3798C9.14005 20.3298 7.52005 21.9498 5.57005 21.9498C3.62005 21.9498 2.00005 20.3198 2.00005 18.3798V12.2198C1.89005 6.5998 6.33005 2.0498 11.95 2.0498C17.57 2.0498 22 6.5998 22 12.1098V18.2698C22 20.2198 20.38 21.8398 18.43 21.8398C16.48 21.8398 14.86 20.2198 14.86 18.2698V15.4598C14.86 14.4898 15.62 13.6198 16.7 13.6198C17.67 13.6198 18.54 14.3798 18.54 15.4598V18.4898" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default HeadphoneTwotoneIcon;
      