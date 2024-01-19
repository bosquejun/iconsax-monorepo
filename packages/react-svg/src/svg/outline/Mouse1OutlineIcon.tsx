
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Mouse1OutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M11.311 18C11.301 18 11.301 18 11.291 18C10.251 17.99 9.37096 17.34 9.06096 16.35L7.11097 10.07C6.85097 9.21997 7.07096 8.30997 7.70096 7.68997C8.32096 7.06997 9.22096 6.84995 10.061 7.10995L16.351 9.05997C17.351 9.36997 18.001 10.25 18.011 11.29C18.021 12.33 17.391 13.21 16.401 13.54L14.681 14.12C14.421 14.21 14.231 14.4 14.141 14.65L13.551 16.38C13.221 17.37 12.341 18 11.311 18ZM9.34096 8.49997C9.04096 8.49997 8.84096 8.65997 8.75096 8.74997C8.52096 8.97997 8.44096 9.30996 8.54096 9.61996L10.491 15.9C10.661 16.45 11.151 16.5 11.301 16.5C11.421 16.49 11.931 16.46 12.111 15.91L12.701 14.18C12.931 13.49 13.491 12.93 14.181 12.7L15.901 12.12C15.901 12.12 15.901 12.12 15.911 12.12C16.461 11.94 16.501 11.45 16.501 11.31C16.501 11.16 16.451 10.67 15.901 10.5L9.61097 8.54996C9.51097 8.50996 9.42096 8.49997 9.34096 8.49997Z" fill={color} />
<path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Mouse1OutlineIcon;
      