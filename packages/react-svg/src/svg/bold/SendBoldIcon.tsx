
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const SendBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M20.5 21.25H3.5C3.09 21.25 2.75 21.59 2.75 22C2.75 22.41 3.09 22.75 3.5 22.75H20.5C20.91 22.75 21.25 22.41 21.25 22C21.25 21.59 20.91 21.25 20.5 21.25Z" fill={color} />
<path d="M5 14.52C5.41 14.52 5.75 14.18 5.75 13.77V5.31L18.47 18.03C18.62 18.18 18.81 18.25 19 18.25C19.19 18.25 19.38 18.18 19.53 18.03C19.82 17.74 19.82 17.26 19.53 16.97L6.81 4.25H15.27C15.68 4.25 16.02 3.91 16.02 3.5C16.02 3.09 15.68 2.75 15.27 2.75H5C4.9 2.75 4.81 2.77 4.71 2.81C4.53 2.88 4.38 3.03 4.31 3.21C4.27 3.31 4.25 3.4 4.25 3.5V13.77C4.25 14.18 4.59 14.52 5 14.52Z" fill={color} />
        </svg>
      )
    }
    
    
    export default SendBoldIcon;
      