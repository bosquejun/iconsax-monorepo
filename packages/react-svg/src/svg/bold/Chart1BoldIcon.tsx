
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Chart1BoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M21 22.75H3C2.59 22.75 2.25 22.41 2.25 22C2.25 21.59 2.59 21.25 3 21.25H21C21.41 21.25 21.75 21.59 21.75 22C21.75 22.41 21.41 22.75 21 22.75Z" fill={color} />
<path d="M5.6 8.37891H4C3.45 8.37891 3 8.82891 3 9.37891V17.9989C3 18.5489 3.45 18.9989 4 18.9989H5.6C6.15 18.9989 6.6 18.5489 6.6 17.9989V9.37891C6.6 8.81891 6.15 8.37891 5.6 8.37891Z" fill={color} />
<path d="M12.7992 5.19141H11.1992C10.6492 5.19141 10.1992 5.64141 10.1992 6.19141V18.0014C10.1992 18.5514 10.6492 19.0014 11.1992 19.0014H12.7992C13.3492 19.0014 13.7992 18.5514 13.7992 18.0014V6.19141C13.7992 5.64141 13.3492 5.19141 12.7992 5.19141Z" fill={color} />
<path d="M20.0004 2H18.4004C17.8504 2 17.4004 2.45 17.4004 3V18C17.4004 18.55 17.8504 19 18.4004 19H20.0004C20.5504 19 21.0004 18.55 21.0004 18V3C21.0004 2.45 20.5504 2 20.0004 2Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Chart1BoldIcon;
      