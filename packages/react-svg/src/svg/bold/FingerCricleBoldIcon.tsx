
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const FingerCricleBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12 7.94922C10.21 7.94922 8.75 9.40922 8.75 11.1992V12.7992C8.75 14.5892 10.21 16.0492 12 16.0492C13.79 16.0492 15.25 14.5892 15.25 12.7992V11.1992C15.25 9.40922 13.79 7.94922 12 7.94922ZM12.9 13.2392C12.9 13.7392 12.5 14.1392 12 14.1392C11.5 14.1392 11.1 13.7392 11.1 13.2392V10.7692C11.1 10.2792 11.5 9.86922 12 9.86922C12.5 9.86922 12.9 10.2692 12.9 10.7692V13.2392Z" fill={color} />
<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.75 12.8C16.75 15.42 14.62 17.55 12 17.55C9.38 17.55 7.25 15.42 7.25 12.8V11.2C7.25 8.58 9.38 6.45 12 6.45C14.62 6.45 16.75 8.58 16.75 11.2V12.8Z" fill={color} />
        </svg>
      )
    }
    
    
    export default FingerCricleBoldIcon;
      