
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const BusBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M4 14.96V5.10001C4 3.40001 5.39001 2 7.10001 2H16.9C18.6 2 20 3.39001 20 5.10001V18.9C20 20.6 18.61 22 16.9 22H7.10001C5.40001 22 4 20.61 4 18.9" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M18.5 13C19.33 13 20 12.33 20 11.5V9.5C20 8.67 19.33 8 18.5 8H5.5C4.67 8 4 8.67 4 9.5V11.5C4 12.33 4.67 13 5.5 13H14.03" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M9.5 5H14.5" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M8.49451 17.7H8.50349" stroke={color} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M15.4945 17.7H15.5035" stroke={color} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default BusBrokenIcon;
      