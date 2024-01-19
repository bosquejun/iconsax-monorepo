
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ThreedSquareOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill={color} />
<path d="M12.0006 13.0799C11.8706 13.0799 11.7406 13.0499 11.6206 12.9799L6.32061 9.91994C5.96061 9.70994 5.84059 9.24995 6.05059 8.89995C6.26059 8.53995 6.72061 8.41994 7.07061 8.62994L11.9906 11.4799L16.8806 8.64995C17.2406 8.43995 17.7006 8.56994 17.9006 8.91994C18.1006 9.26994 17.9806 9.73995 17.6306 9.93995L12.3706 12.9799C12.2606 13.0399 12.1306 13.0799 12.0006 13.0799Z" fill={color} />
<path d="M12 18.5201C11.59 18.5201 11.25 18.1801 11.25 17.7701V12.3301C11.25 11.9201 11.59 11.5801 12 11.5801C12.41 11.5801 12.75 11.9201 12.75 12.3301V17.7701C12.75 18.1801 12.41 18.5201 12 18.5201Z" fill={color} />
<path d="M12.0002 18.75C11.4202 18.75 10.8503 18.62 10.3903 18.37L7.19025 16.59C6.23025 16.06 5.49023 14.79 5.49023 13.69V10.3C5.49023 9.21005 6.24025 7.94005 7.19025 7.40005L10.3903 5.62005C11.3103 5.11005 12.6902 5.11005 13.6102 5.62005L16.8102 7.40005C17.7702 7.93005 18.5103 9.20005 18.5103 10.3V13.69C18.5103 14.78 17.7602 16.05 16.8102 16.59L13.6102 18.37C13.1502 18.63 12.5802 18.75 12.0002 18.75ZM12.0002 6.75005C11.6702 6.75005 11.3502 6.81005 11.1202 6.94005L7.92026 8.72005C7.43026 8.99005 6.99023 9.75005 6.99023 10.3V13.69C6.99023 14.25 7.43026 15 7.92026 15.27L11.1202 17.05C11.5802 17.31 12.4202 17.31 12.8802 17.05L16.0802 15.27C16.5702 15 17.0103 14.24 17.0103 13.69V10.3C17.0103 9.74005 16.5702 8.99005 16.0802 8.72005L12.8802 6.94005C12.6502 6.81005 12.3302 6.75005 12.0002 6.75005Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ThreedSquareOutlineIcon;
      