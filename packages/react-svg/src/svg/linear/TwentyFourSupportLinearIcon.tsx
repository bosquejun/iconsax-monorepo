
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const TwentyFourSupportLinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M18 18.86H17.24C16.44 18.86 15.68 19.17 15.12 19.73L13.41 21.42C12.63 22.19 11.36 22.19 10.58 21.42L8.87 19.73C8.31 19.17 7.54 18.86 6.75 18.86H6C4.34 18.86 3 17.53 3 15.89V4.97998C3 3.33998 4.34 2.01001 6 2.01001H18C19.66 2.01001 21 3.33998 21 4.97998V15.89C21 17.52 19.66 18.86 18 18.86Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M7 9.16003C7 8.23003 7.76 7.46997 8.69 7.46997C9.62 7.46997 10.38 8.23003 10.38 9.16003C10.38 11.04 7.71 11.24 7.12 13.03C7 13.4 7.31 13.77 7.7 13.77H10.38" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M16.04 13.76V8.05003C16.04 7.79003 15.87 7.55997 15.62 7.48997C15.37 7.41997 15.1 7.51997 14.96 7.73997C14.24 8.89997 13.46 10.22 12.78 11.38C12.67 11.57 12.67 11.82 12.78 12.01C12.89 12.2 13.1 12.3199 13.33 12.3199H17" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default TwentyFourSupportLinearIcon;
      