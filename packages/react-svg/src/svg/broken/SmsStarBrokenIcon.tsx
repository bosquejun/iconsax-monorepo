
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const SmsStarBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M2 8.5C2 5 4 3.5 7 3.5H12" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M22 11.5V15.5C22 19 20 20.5 17 20.5H7C4 20.5 2 19 2 15.5V12.98" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M7 9L10.13 11.5C11.16 12.32 12.85 12.32 13.88 11.5" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M19.4792 2.81994L19.7592 3.38993C19.8992 3.66993 20.2492 3.92994 20.5592 3.98994L20.9392 4.04994C22.0792 4.23994 22.3492 5.07994 21.5292 5.90994L21.1792 6.25993C20.9492 6.49993 20.8192 6.95993 20.8892 7.27993L20.9392 7.48994C21.2492 8.86994 20.5192 9.39993 19.3192 8.67993L19.0592 8.52993C18.7492 8.34993 18.2492 8.34993 17.9392 8.52993L17.6792 8.67993C16.4692 9.40993 15.7392 8.86994 16.0592 7.48994L16.1092 7.27993C16.1792 6.95993 16.0492 6.49993 15.8192 6.25993L15.4692 5.90994C14.6492 5.07994 14.9192 4.23994 16.0592 4.04994L16.4392 3.98994C16.7392 3.93994 17.0992 3.66993 17.2392 3.38993L17.5192 2.81994C18.0592 1.72994 18.9392 1.72994 19.4792 2.81994Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default SmsStarBrokenIcon;
      