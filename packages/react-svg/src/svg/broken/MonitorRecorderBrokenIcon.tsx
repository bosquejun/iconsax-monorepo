
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MonitorRecorderBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M2 6.44C2 2.89 2.89 2 6.44 2H8" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M22 11.89V12.78C22 16.34 21.11 17.22 17.56 17.22H6.44C2.89 17.22 2 16.33 2 12.78V10.79" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12 17.22V22" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2 13H22" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M7.5 22H16.5" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M17.8598 9.37001H13.0998C11.7198 9.37001 11.2598 8.45001 11.2598 7.53001V4.01001C11.2598 2.91001 12.1598 2.01001 13.2598 2.01001H17.8598C18.8798 2.01001 19.6998 2.83001 19.6998 3.85001V7.53001C19.6998 8.55001 18.8798 9.37001 17.8598 9.37001Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M20.9092 7.91998L19.6992 7.06998V4.30998L20.9092 3.45998C21.5092 3.04998 21.9992 3.29998 21.9992 4.02998V7.35998C21.9992 8.08998 21.5092 8.33998 20.9092 7.91998Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default MonitorRecorderBrokenIcon;
      