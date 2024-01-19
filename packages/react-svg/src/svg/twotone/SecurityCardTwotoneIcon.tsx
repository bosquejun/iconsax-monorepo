
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const SecurityCardTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M11.74 17.7499H17.66C17.57 17.8299 17.48 17.8999 17.39 17.9799L13.12 21.1799C11.71 22.2299 9.41001 22.2299 7.99001 21.1799L3.71001 17.9799C2.77001 17.2799 2 15.7299 2 14.5599V7.14986C2 5.92986 2.93001 4.57986 4.07001 4.14986L9.05 2.27986C9.87 1.96986 11.23 1.96986 12.05 2.27986L17.02 4.14986C17.97 4.50986 18.78 5.50986 19.03 6.52986H11.73C11.51 6.52986 11.31 6.53987 11.12 6.53987C9.27 6.64987 8.78999 7.31986 8.78999 9.42986V14.8598C8.79999 17.1598 9.39001 17.7499 11.74 17.7499Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M8.80078 11.2202H22.0008" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M22.0008 9.41977V14.9698C21.9808 17.1898 21.3708 17.7397 19.0608 17.7397H11.7408C9.39078 17.7397 8.80078 17.1498 8.80078 14.8398V9.40976C8.80078 7.30976 9.28078 6.63974 11.1308 6.51974C11.3208 6.51974 11.5208 6.50977 11.7408 6.50977H19.0608C21.4108 6.51977 22.0008 7.09977 22.0008 9.41977Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M11.3203 15.2598H12.6503" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M14.75 15.2598H18.02" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default SecurityCardTwotoneIcon;
      