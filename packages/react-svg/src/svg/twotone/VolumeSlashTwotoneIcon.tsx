
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const VolumeSlashTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 22 22" fill={color} {...otherProps} >
          <path d="M14 7.36979V6.40979C14 3.42979 11.93 2.28979 9.41 3.86979L6.49 5.69979C6.17 5.88979 5.8 5.99979 5.43 5.99979H4C2 5.99979 1 6.99979 1 8.99979V12.9998C1 14.9998 2 15.9998 4 15.9998H6" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M9.41016 18.1302C11.9302 19.7102 14.0002 18.5602 14.0002 15.5902V11.9502" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M17.81 8.41992C18.71 10.5699 18.44 13.0799 17 14.9999" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M20.1501 6.7998C21.6201 10.2898 21.1801 14.3698 18.8301 17.4998" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M21 1L1 21" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default VolumeSlashTwotoneIcon;
      