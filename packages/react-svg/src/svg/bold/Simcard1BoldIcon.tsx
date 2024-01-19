
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Simcard1BoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M19.54 6.54L16.47 3.47C15.53 2.53 14.26 2 12.93 2H8C5 2 3 4 3 7V17C3 20 5 22 8 22H16C19 22 21 20 21 17V10.07C21 8.74 20.47 7.47 19.54 6.54ZM11.5 18C11.5 18.2761 11.2761 18.5 11 18.5H10C8.35 18.5 7 17.15 7 15.5V15C7 14.7239 7.22386 14.5 7.5 14.5H11.25C11.39 14.5 11.5 14.61 11.5 14.75V18ZM11.5 13.25C11.5 13.39 11.39 13.5 11.25 13.5H7.5C7.22386 13.5 7 13.2761 7 13V12.5C7 10.85 8.35 9.5 10 9.5H11C11.2761 9.5 11.5 9.72386 11.5 10V13.25ZM17 15.5C17 17.15 15.65 18.5 14 18.5H13C12.7239 18.5 12.5 18.2761 12.5 18V14.75C12.5 14.61 12.61 14.5 12.75 14.5H16.5C16.7761 14.5 17 14.7239 17 15V15.5ZM17 13C17 13.2761 16.7761 13.5 16.5 13.5H12.75C12.61 13.5 12.5 13.39 12.5 13.25V10C12.5 9.72386 12.7239 9.5 13 9.5H14C15.65 9.5 17 10.85 17 12.5V13Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Simcard1BoldIcon;
      