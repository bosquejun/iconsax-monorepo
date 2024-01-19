
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const VideoVerticalBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M6.36 7.78125H2V11.2512H6.36V7.78125Z" fill={color} />
<path d="M6.35844 6.28891V2.12891C4.07844 2.54891 2.58844 4.01891 2.14844 6.27891H6.32844C6.33844 6.27891 6.34844 6.28891 6.35844 6.28891Z" fill={color} />
<path d="M6.36 16.31V12.75H2V16.28H6.24C6.28 16.28 6.32 16.3 6.36 16.31Z" fill={color} />
<path d="M21.8494 6.27969C21.4194 4.08969 20.0194 2.64969 17.8594 2.17969V6.27969H21.8494Z" fill={color} />
<path d="M16.3594 11.25V2.01C16.3094 2 16.2494 2 16.1894 2H7.85938V11.25H16.3594Z" fill={color} />
<path d="M21.9994 12.75H17.8594V16.28H21.9994V12.75Z" fill={color} />
<path d="M17.8594 21.8212C19.9994 21.3512 21.3994 19.9313 21.8394 17.7812H17.8594V21.8212Z" fill={color} />
<path d="M6.24016 17.7817H2.16016C2.62016 20.0017 4.10016 21.4517 6.36016 21.8717V17.7617C6.32016 17.7717 6.28016 17.7817 6.24016 17.7817Z" fill={color} />
<path d="M21.9994 7.78125H17.8594V11.2512H21.9994V7.78125Z" fill={color} />
<path d="M7.85938 12.75V22H16.1894C16.2494 22 16.3094 22 16.3594 21.99V12.75H7.85938Z" fill={color} />
        </svg>
      )
    }
    
    
    export default VideoVerticalBoldIcon;
      