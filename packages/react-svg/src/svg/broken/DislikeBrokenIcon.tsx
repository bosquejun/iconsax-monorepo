
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const DislikeBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M2.51973 12.05C2.01973 13.45 2.91973 14.65 4.41973 14.65H8.41973C9.01973 14.65 9.51973 15.15 9.41973 15.85L8.91973 19.05C8.71973 19.95 9.31973 20.95 10.2197 21.25C11.0197 21.55 12.0197 21.15 12.4197 20.55L16.5197 14.45" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M16.5193 5.65002L13.4193 3.25002C13.0193 2.85002 12.1193 2.65002 11.5193 2.65002H7.7193C6.5193 2.65002 5.2193 3.55002 4.9193 4.75002L3.7793 8.22002" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M21.6191 5.65V15.45C21.6191 16.85 21.0191 17.35 19.6191 17.35H18.6191C17.2191 17.35 16.6191 16.85 16.6191 15.45V5.65C16.6191 4.25 17.2191 3.75 18.6191 3.75H19.6191C21.0191 3.75 21.6191 4.25 21.6191 5.65Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default DislikeBrokenIcon;
      