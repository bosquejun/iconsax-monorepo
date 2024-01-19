
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const TimerBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M9.60906 9.83L17.2591 16.78C19.2891 18.62 18.9991 22 15.2391 22H8.75906C4.99906 22 4.70906 18.62 6.73906 16.78L17.2591 7.22C19.2891 5.38 18.9991 2 15.2391 2H8.75906C4.99906 2 4.70906 5.38 6.73906 7.22" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default TimerBrokenIcon;
      