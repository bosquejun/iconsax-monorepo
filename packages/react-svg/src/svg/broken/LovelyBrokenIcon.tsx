
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const LovelyBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M6.95999 3.09998C8.58999 3.09998 10.03 3.87997 10.93 5.08997C11.84 3.87997 13.28 3.09998 14.9 3.09998C17.64 3.09998 19.86 5.32997 19.86 8.08997C19.86 8.50997 19.83 8.91997 19.78 9.30997C19.32 9.10997 18.82 8.99997 18.29 8.99997C17.07 8.99997 15.99 9.58996 15.32 10.49C14.64 9.58996 13.56 8.99997 12.34 8.99997C10.29 8.99997 8.63 10.67 8.63 12.74C8.63 15.42 10.05 17.47 11.63 18.86C11.58 18.89 11.53 18.9 11.48 18.92C11.18 19.03 10.68 19.03 10.38 18.92C7.79 18.03 2 14.35 2 8.08997C2 6.91997 2.40001 5.83996 3.07001 4.98996" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M22.0009 12.74C22.0009 17.42 17.6709 20.18 15.7309 20.84C15.5009 20.92 15.1308 20.92 14.9008 20.84C14.0708 20.56 12.8009 19.89 11.6309 18.86C10.0509 17.47 8.63086 15.42 8.63086 12.74C8.63086 10.67 10.2909 9 12.3409 9C13.5609 9 14.6409 9.58999 15.3209 10.49C15.9909 9.58999 17.0709 9 18.2909 9C18.8209 9 19.3209 9.11 19.7809 9.31" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default LovelyBrokenIcon;
      