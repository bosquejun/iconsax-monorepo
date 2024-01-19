
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const BucketSquareBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM9.06 16.25L6.5 13.68C6.06 13.24 5.85 12.8 5.86 12.35C5.87 11.93 6.09 11.52 6.5 11.11L10.1 7.51L9.54 6.96C9.35 6.77 9.35 6.47 9.54 6.28C9.73 6.09 10.03 6.09 10.22 6.28L10.77 6.83L15.47 11.53C15.57 11.63 15.64 11.78 15.64 11.92C15.65 12.09 15.6 12.26 15.47 12.39L11.62 16.24C10.78 17.1 9.92 17.1 9.06 16.25ZM16.64 17.86C15.81 17.86 15.14 17.19 15.14 16.36C15.14 15.52 16.13 14.41 16.33 14.19C16.49 14.01 16.8 14.01 16.97 14.19C17.17 14.4 18.16 15.52 18.16 16.36C18.14 17.19 17.47 17.86 16.64 17.86Z" fill={color} />
        </svg>
      )
    }
    
    
    export default BucketSquareBoldIcon;
      