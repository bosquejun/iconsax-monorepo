
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MobileProgrammingOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M13.4994 5.75024H10.4794C9.25944 5.75024 8.24944 4.76022 8.22944 3.54022L8.19944 2.01025C8.18944 1.60025 8.51942 1.25023 8.92942 1.24023C8.93942 1.24023 8.93944 1.24023 8.94944 1.24023C9.35944 1.24023 9.68944 1.57021 9.69944 1.97021L9.72944 3.50024C9.73944 3.90024 10.0794 4.24023 10.4794 4.24023H13.4994C13.9194 4.24023 14.2494 3.90023 14.2494 3.49023V2.00024C14.2494 1.59024 14.5894 1.25024 14.9994 1.25024C15.4094 1.25024 15.7494 1.59024 15.7494 2.00024V3.50024C15.7494 4.74024 14.7394 5.75024 13.4994 5.75024Z" fill={color} />
<path d="M16.9995 21.75C16.8095 21.75 16.6195 21.68 16.4695 21.53L14.4695 19.53C14.1795 19.24 14.1795 18.7599 14.4695 18.4699L16.4695 16.4699C16.7595 16.1799 17.2395 16.1799 17.5295 16.4699C17.8195 16.7599 17.8195 17.24 17.5295 17.53L16.0594 19L17.5295 20.4699C17.8195 20.7599 17.8195 21.24 17.5295 21.53C17.3795 21.68 17.1895 21.75 16.9995 21.75Z" fill={color} />
<path d="M19.9995 21.75C19.8095 21.75 19.6195 21.68 19.4695 21.53C19.1795 21.24 19.1795 20.7599 19.4695 20.4699L20.9395 19L19.4695 17.53C19.1795 17.24 19.1795 16.7599 19.4695 16.4699C19.7595 16.1799 20.2395 16.1799 20.5295 16.4699L22.5295 18.4699C22.8195 18.7599 22.8195 19.24 22.5295 19.53L20.5295 21.53C20.3795 21.68 20.1895 21.75 19.9995 21.75Z" fill={color} />
<path d="M13 22.75H8C4.35 22.75 2.25 20.65 2.25 17V7C2.25 3.35 4.35 1.25 8 1.25H16C19.65 1.25 21.75 3.35 21.75 7V14C21.75 14.41 21.41 14.75 21 14.75C20.59 14.75 20.25 14.41 20.25 14V7C20.25 4.14 18.86 2.75 16 2.75H8C5.14 2.75 3.75 4.14 3.75 7V17C3.75 19.86 5.14 21.25 8 21.25H13C13.41 21.25 13.75 21.59 13.75 22C13.75 22.41 13.41 22.75 13 22.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default MobileProgrammingOutlineIcon;
      