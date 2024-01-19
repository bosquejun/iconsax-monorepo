
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Glass1BrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M10 17.5H14" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2 17.5V7.5C2 3.5 3 2.5 7 2.5" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M22 17.5V7.5C22 3.5 21 2.5 17 2.5" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M10 15.9101V19.2001C10 21.2001 9.2 22.0001 7.2 22.0001H4.8C2.8 22.0001 2 21.2001 2 19.2001V15.9101C2 13.9101 2.8 13.1101 4.8 13.1101H7.2" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M22 15.9101V19.2001C22 21.2001 21.2 22.0001 19.2 22.0001H16.8C14.8 22.0001 14 21.2001 14 19.2001V15.9101C14 13.9101 14.8 13.1101 16.8 13.1101H19.2C21.2 13.1101 22 13.9101 22 15.9101Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default Glass1BrokenIcon;
      