
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const AlarmBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M22 21.25H21V15C21 10.03 16.97 6 12 6C7.03 6 3 10.03 3 15V21.25H2C1.59 21.25 1.25 21.59 1.25 22C1.25 22.41 1.59 22.75 2 22.75H22C22.41 22.75 22.75 22.41 22.75 22C22.75 21.59 22.41 21.25 22 21.25Z" fill={color} />
<path d="M12 3.75C11.59 3.75 11.25 3.41 11.25 3V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2V3C12.75 3.41 12.41 3.75 12 3.75Z" fill={color} />
<path d="M5.00141 5.75141C4.81141 5.75141 4.62141 5.68141 4.47141 5.53141L3.47141 4.53141C3.18141 4.24141 3.18141 3.76141 3.47141 3.47141C3.76141 3.18141 4.24141 3.18141 4.53141 3.47141L5.53141 4.47141C5.82141 4.76141 5.82141 5.24141 5.53141 5.53141C5.38141 5.68141 5.19141 5.75141 5.00141 5.75141Z" fill={color} />
<path d="M19.0014 5.75141C18.8114 5.75141 18.6214 5.68141 18.4714 5.53141C18.1814 5.24141 18.1814 4.76141 18.4714 4.47141L19.4714 3.47141C19.7614 3.18141 20.2414 3.18141 20.5314 3.47141C20.8214 3.76141 20.8214 4.24141 20.5314 4.53141L19.5314 5.53141C19.3814 5.68141 19.1914 5.75141 19.0014 5.75141Z" fill={color} />
        </svg>
      )
    }
    
    
    export default AlarmBoldIcon;
      