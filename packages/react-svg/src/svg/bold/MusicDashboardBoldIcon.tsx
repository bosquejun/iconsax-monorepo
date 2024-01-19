
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MusicDashboardBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M7 3.25178V20.7518C7 21.3918 6.39 21.9018 5.77 21.7318C3.37 21.0518 2 19.0918 2 16.1918V7.81178C2 4.91178 3.37 2.95178 5.77 2.27178C6.39 2.10178 7 2.60178 7 3.25178Z" fill={color} />
<path d="M12.4691 14.3711C12.0891 14.3711 11.7891 14.6811 11.7891 15.0511C11.7891 15.4211 12.0991 15.7311 12.4691 15.7311C12.8491 15.7311 13.1591 15.4211 13.1591 15.0511C13.1591 14.6811 12.8491 14.3711 12.4691 14.3711Z" fill={color} />
<path d="M17.5181 13.4492C17.1381 13.4492 16.8281 13.7592 16.8281 14.1392C16.8281 14.5192 17.1381 14.8192 17.5181 14.8192C17.8981 14.8192 18.2081 14.5092 18.2081 14.1392C18.2081 13.7692 17.8981 13.4492 17.5181 13.4492Z" fill={color} />
<path d="M16.19 2H9.5C8.95 2 8.5 2.45 8.5 3V21C8.5 21.55 8.95 22 9.5 22H16.19C19.4 22 22 19.4 22 16.19V7.81C22 4.6 19.4 2 16.19 2ZM19.6 9.74V14.14C19.6 14.15 19.59 14.16 19.59 14.17C19.57 15.3 18.65 16.21 17.52 16.21C16.38 16.21 15.45 15.28 15.45 14.14C15.45 13 16.38 12.07 17.52 12.07C17.76 12.07 17.99 12.12 18.21 12.2V10.65L14.54 11.65V15.07C14.54 15.08 14.53 15.09 14.53 15.1C14.51 16.23 13.59 17.14 12.46 17.14C11.32 17.14 10.39 16.21 10.39 15.07C10.39 13.93 11.32 13 12.46 13C12.7 13 12.93 13.05 13.15 13.13V11.13V9.5C13.15 8.64 13.68 7.94 14.51 7.73L17.26 6.97C18.12 6.74 18.65 6.97 18.95 7.2C19.38 7.53 19.59 8.05 19.59 8.75V9.74H19.6Z" fill={color} />
        </svg>
      )
    }
    
    
    export default MusicDashboardBoldIcon;
      