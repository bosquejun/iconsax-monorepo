
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Simcard1OutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M16 22.75H8C4.56 22.75 2.25 20.44 2.25 17V7C2.25 3.56 4.56 1.25 8 1.25H12.93C14.47 1.25 15.91 1.84999 17 2.92999L20.07 6C21.16 7.08 21.75 8.53001 21.75 10.07V17C21.75 20.44 19.44 22.75 16 22.75ZM8 2.75C5.42 2.75 3.75 4.42 3.75 7V17C3.75 19.58 5.42 21.25 8 21.25H16C18.58 21.25 20.25 19.58 20.25 17V10.07C20.25 8.93001 19.81 7.87001 19 7.07001L15.93 4C15.13 3.2 14.06 2.76001 12.92 2.76001H8V2.75Z" fill={color} />
<path d="M9.49945 18.75C9.30945 18.75 9.11945 18.68 8.96945 18.53L6.96945 16.53C6.67945 16.24 6.67945 15.7599 6.96945 15.4699L8.96945 13.4699C9.25945 13.1799 9.73945 13.1799 10.0295 13.4699C10.3195 13.7599 10.3195 14.24 10.0295 14.53L8.55945 16L10.0295 17.4699C10.3195 17.7599 10.3195 18.24 10.0295 18.53C9.87945 18.68 9.68945 18.75 9.49945 18.75Z" fill={color} />
<path d="M14.4995 18.75C14.3095 18.75 14.1195 18.68 13.9695 18.53C13.6795 18.24 13.6795 17.7599 13.9695 17.4699L15.4395 16L13.9695 14.53C13.6795 14.24 13.6795 13.7599 13.9695 13.4699C14.2595 13.1799 14.7395 13.1799 15.0295 13.4699L17.0295 15.4699C17.3195 15.7599 17.3195 16.24 17.0295 16.53L15.0295 18.53C14.8795 18.68 14.6895 18.75 14.4995 18.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Simcard1OutlineIcon;
      