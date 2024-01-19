
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Link21BrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M13.0598 10.9399C15.3098 13.1899 15.3098 16.8299 13.0598 19.0699C10.8098 21.3099 7.16985 21.3199 4.92985 19.0699C2.68985 16.8199 2.67985 13.1799 4.92985 10.9399" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M14.9707 3.16992C16.4607 3.19992 17.9407 3.78992 19.0707 4.92992C21.4107 7.26992 21.4107 11.0699 19.0707 13.4199" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M10.5909 13.4099C8.25094 11.0699 8.25094 7.26992 10.5909 4.91992" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default Link21BrokenIcon;
      