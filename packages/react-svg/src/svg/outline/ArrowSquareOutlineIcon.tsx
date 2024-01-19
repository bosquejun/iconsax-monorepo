
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ArrowSquareOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12.1406 15.8198C11.7306 15.8198 11.3906 15.4798 11.3906 15.0698V13.1098C11.3906 10.1798 13.7706 7.7998 16.7106 7.7998H18.6706C19.0806 7.7998 19.4206 8.1398 19.4206 8.5498C19.4206 8.9598 19.0806 9.2998 18.6706 9.2998H16.7106C14.6106 9.2998 12.8906 11.0098 12.8906 13.1098V15.0698C12.8906 15.4898 12.5506 15.8198 12.1406 15.8198Z" fill={color} />
<path d="M12.1411 18.0001C11.7311 18.0001 11.3911 17.6601 11.3911 17.2501V13.1201C11.3911 11.0201 9.68112 9.31006 7.58112 9.31006H5.62109C5.21109 9.31006 4.87109 8.97006 4.87109 8.56006C4.87109 8.15006 5.21109 7.81006 5.62109 7.81006H7.58112C10.5111 7.81006 12.8911 10.1901 12.8911 13.1201V17.2501C12.8911 17.6601 12.5511 18.0001 12.1411 18.0001Z" fill={color} />
<path d="M7.13931 11.0999C6.94931 11.0999 6.75928 11.0299 6.60928 10.8799L4.8093 9.07994C4.5193 8.78994 4.5193 8.30994 4.8093 8.01994L6.60928 6.21994C6.89928 5.92994 7.37928 5.92994 7.66928 6.21994C7.95928 6.50994 7.95928 6.98994 7.66928 7.27994L6.39932 8.54994L7.66928 9.81995C7.95928 10.1099 7.95928 10.5899 7.66928 10.8799C7.51928 11.0299 7.32931 11.0999 7.13931 11.0999Z" fill={color} />
<path d="M16.8607 11.0999C16.6707 11.0999 16.4808 11.0299 16.3308 10.8799C16.0408 10.5899 16.0408 10.1099 16.3308 9.81995L17.6007 8.54994L16.3308 7.27994C16.0408 6.98994 16.0408 6.50994 16.3308 6.21994C16.6208 5.92994 17.1008 5.92994 17.3908 6.21994L19.1908 8.01994C19.4808 8.30994 19.4808 8.78994 19.1908 9.07994L17.3908 10.8799C17.2508 11.0299 17.0507 11.0999 16.8607 11.0999Z" fill={color} />
<path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ArrowSquareOutlineIcon;
      