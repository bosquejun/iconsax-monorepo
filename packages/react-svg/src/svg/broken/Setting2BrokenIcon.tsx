
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Setting2BrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M15 12C15 10.34 13.66 9 12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C12.41 15 12.81 14.92 13.17 14.76" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M6.88086 20.5801L7.97086 21.2101C8.76086 21.6801 9.78086 21.4001 10.2509 20.6101L10.3609 20.4201C11.2609 18.8501 12.7409 18.8501 13.6509 20.4201L13.7609 20.6101C14.2309 21.4001 15.2509 21.6801 16.0409 21.2101L17.7709 20.2201C18.6809 19.7001 18.9909 18.5301 18.4709 17.6301C17.5609 16.0601 18.3009 14.7801 20.1109 14.7801C21.1509 14.7801 22.0109 13.9301 22.0109 12.8801V11.1201C22.0109 10.0801 21.1609 9.22007 20.1109 9.22007C19.1009 9.22007 18.4209 8.82007 18.1809 8.19007C17.9909 7.70007 18.0709 7.06007 18.4709 6.37007C18.9909 5.46007 18.6809 4.30007 17.7709 3.78007L16.9609 3.32007" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M13.64 3.57994C12.74 5.14994 11.26 5.14994 10.35 3.57994L10.24 3.38994C9.78 2.59994 8.76 2.31994 7.97 2.78994L6.24 3.77994C5.33 4.29994 5.02 5.46994 5.54 6.37994C6.45 7.93994 5.71 9.21994 3.9 9.21994C2.86 9.21994 2 10.0699 2 11.1199V12.8799C2 13.9199 2.85 14.7799 3.9 14.7799C5.71 14.7799 6.45 16.0599 5.54 17.6299" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default Setting2BrokenIcon;
      