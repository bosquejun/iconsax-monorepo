
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const PersonalcardBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M2 8C2 4 3 3 7 3H17C21 3 22 4 22 8V16C22 20 21 21 17 21H7C3 21 2 20 2 16V12.4" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M14 8H19" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M15 12H19" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M17 16H19" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M8.49945 11.2899C9.49909 11.2899 10.3095 10.4796 10.3095 9.47992C10.3095 8.48029 9.49909 7.66992 8.49945 7.66992C7.49982 7.66992 6.68945 8.48029 6.68945 9.47992C6.68945 10.4796 7.49982 11.2899 8.49945 11.2899Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12 16.33C11.86 14.88 10.71 13.74 9.26 13.61C8.76 13.56 8.25 13.56 7.74 13.61C6.29 13.75 5.14 14.88 5 16.33" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default PersonalcardBrokenIcon;
      