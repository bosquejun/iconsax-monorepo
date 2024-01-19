
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const VolumeSlashBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M2 14C2 16 3 17 5 17H7" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M15 8.36979V7.40979C15 4.42979 12.93 3.28979 10.41 4.86979L7.49 6.69979C7.17 6.88979 6.8 6.99979 6.43 6.99979H5C3 6.99979 2 7.99979 2 9.99979" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M10.4102 19.1302C12.9302 20.7102 15.0002 19.5602 15.0002 16.5902V12.9502" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M18.81 9.41992C19.71 11.5699 19.44 14.0799 18 15.9999" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M20.7798 17C20.5098 17.52 20.1998 18.02 19.8398 18.5" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M21.1504 7.7998C21.9804 9.7698 22.2004 11.9298 21.8104 13.9998" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M22 2L2 22" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default VolumeSlashBrokenIcon;
      