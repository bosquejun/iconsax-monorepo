
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const TwentyFourSupportBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M3 4.96997C3 3.32997 4.34 2 6 2H18C19.66 2 21 3.32997 21 4.96997V15.88C21 17.52 19.66 18.85 18 18.85H17.24C16.44 18.85 15.68 19.16 15.12 19.72L13.41 21.41C12.63 22.18 11.36 22.18 10.58 21.41L8.87 19.72C8.31 19.16 7.54 18.85 6.75 18.85H6C4.34 18.85 3 17.52 3 15.88V9.06995" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M7 9.16003C7 8.23003 7.76 7.46997 8.69 7.46997C9.62 7.46997 10.38 8.23003 10.38 9.16003C10.38 11.04 7.71 11.24 7.12 13.03C7 13.4 7.31 13.77 7.7 13.77H10.38" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M16.0398 13.76V8.05003C16.0398 7.79003 15.8698 7.55997 15.6198 7.48997C15.3698 7.41997 15.0998 7.51997 14.9598 7.73997C14.2398 8.89997 13.4598 10.22 12.7798 11.38C12.6698 11.57 12.6698 11.82 12.7798 12.01C12.8898 12.2 13.0998 12.3199 13.3298 12.3199H16.9998" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default TwentyFourSupportBrokenIcon;
      