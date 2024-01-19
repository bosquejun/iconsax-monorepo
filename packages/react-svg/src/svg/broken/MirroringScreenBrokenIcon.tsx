
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MirroringScreenBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M22 12.45V15.9999C22 18.9999 20 20.9999 17 20.9999H16" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2 9V8C2 5 4 3 7 3H17C20 3 22 5 22 8" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M3.69141 11.71C8.31141 12.3 11.7014 15.7 12.3014 20.32" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2.62109 15.0701C6.01109 15.5001 8.5011 18.0001 8.9411 21.3901" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M1.98047 18.8599C3.67047 19.0799 4.92047 20.3199 5.14047 22.0199" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default MirroringScreenBrokenIcon;
      