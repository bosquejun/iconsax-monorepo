
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const JudgeOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M20.01 19.26C19.82 19.26 19.63 19.19 19.48 19.04L14.53 14.09C14.24 13.8 14.24 13.32 14.53 13.03C14.82 12.74 15.3 12.74 15.59 13.03L20.54 17.98C20.83 18.27 20.83 18.75 20.54 19.04C20.39 19.19 20.2 19.26 20.01 19.26Z" fill={color} />
<path d="M10.1095 18.4302C9.37946 18.4302 8.67946 18.1402 8.16946 17.6202L3.92945 13.3802C2.85945 12.3102 2.85945 10.5602 3.92945 9.49015L10.9995 2.42018C12.0695 1.35018 13.8195 1.35018 14.8895 2.42018L19.1295 6.66017C19.6495 7.18017 19.9395 7.87017 19.9395 8.60017C19.9395 9.33017 19.6495 10.0302 19.1295 10.5402L12.0595 17.6101C11.5395 18.1501 10.8495 18.4302 10.1095 18.4302ZM12.9395 3.12016C12.6195 3.12016 12.2995 3.24015 12.0595 3.49015L4.98947 10.5602C4.49947 11.0502 4.49947 11.8401 4.98947 12.3301L9.22946 16.5702C9.69946 17.0402 10.5195 17.0402 10.9995 16.5702L18.0695 9.50016C18.3095 9.26016 18.4395 8.95016 18.4395 8.62016C18.4395 8.29016 18.3095 7.97015 18.0695 7.74015L13.8295 3.50016C13.5795 3.24016 13.2595 3.12016 12.9395 3.12016Z" fill={color} />
<path d="M8 21.75H2C1.59 21.75 1.25 21.41 1.25 21C1.25 20.59 1.59 20.25 2 20.25H8C8.41 20.25 8.75 20.59 8.75 21C8.75 21.41 8.41 21.75 8 21.75Z" fill={color} />
<path d="M13.63 15.7398C13.44 15.7398 13.25 15.6698 13.1 15.5198L6.03 8.44986C5.74 8.15986 5.74 7.67986 6.03 7.38986C6.32 7.09986 6.8 7.09986 7.09 7.38986L14.16 14.4598C14.45 14.7498 14.45 15.2298 14.16 15.5198C14.02 15.6698 13.82 15.7398 13.63 15.7398Z" fill={color} />
        </svg>
      )
    }
    
    
    export default JudgeOutlineIcon;
      