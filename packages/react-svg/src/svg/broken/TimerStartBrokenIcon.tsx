
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const TimerStartBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12 8V13" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M8.00977 5.46C9.20977 4.85 10.5598 4.5 11.9998 4.5C16.8298 4.5 20.7498 8.42 20.7498 13.25" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12 22C7.17 22 3.25 18.08 3.25 13.25C3.25 11.27 3.91 9.44999 5.01 7.98999" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M9 2H15" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M14.9004 18.5V17.34C14.9004 15.91 15.9204 15.32 17.1604 16.04L18.1604 16.62L19.1604 17.2C20.4004 17.92 20.4004 19.09 19.1604 19.81L18.1604 20.39L17.1604 20.97C15.9204 21.69 14.9004 21.1 14.9004 19.67V18.5Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default TimerStartBrokenIcon;
      