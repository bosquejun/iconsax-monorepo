
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const GhostBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M2 16.07V20.08C2 21.34 2.74998 21.68 3.66998 20.84L4.66998 19.93C5.03998 19.59 5.64001 19.59 6.01001 19.93L8.01001 21.76C8.38001 22.1 8.97998 22.1 9.34998 21.76L11.35 19.93C11.72 19.59 12.32 19.59 12.69 19.93L14.69 21.76C15.06 22.1 15.66 22.1 16.03 21.76L18.03 19.93C18.4 19.59 19 19.59 19.37 19.93L20.37 20.84C21.29 21.68 22.04 21.34 22.04 20.08V12.19C22.04 6.59 17.54 2.01001 12.04 2.01001C6.53998 2.01001 2.03998 6.59 2.03998 12.19" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M8 14C10.37 15.78 13.63 15.78 16 14" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default GhostBrokenIcon;
      