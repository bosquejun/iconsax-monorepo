
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const FingerScanBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M11.9996 9.12C12.9096 9.12 13.6496 9.86002 13.6496 10.77V13.24C13.6496 14.15 12.9096 14.89 11.9996 14.89C11.0896 14.89 10.3496 14.15 10.3496 13.24" stroke={color} stroke-width="1.5" stroke-linecap="round" />
<path d="M16.98 13.4699C16.78 16.0499 14.62 18.0699 12 18.0699C9.24 18.0699 7 15.8299 7 13.0699V10.9299C7 8.16993 9.24 5.92993 12 5.92993C14.59 5.92993 16.72 7.89992 16.97 10.4199" stroke={color} stroke-width="1.5" stroke-linecap="round" />
<path d="M15 2H17C20 2 22 4 22 7V9" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2 9V7C2 4 4 2 7 2H9" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M15 22H17C20 22 22 20 22 17V15" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2 15V17C2 20 4 22 7 22H9" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default FingerScanBrokenIcon;
      