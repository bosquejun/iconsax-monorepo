
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ThreedSquareLinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M6.69995 9.26001L11.9999 12.33L17.2599 9.28001" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12 17.7701V12.3201" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M10.76 6.28998L7.56 8.06998C6.84 8.46998 6.23999 9.47998 6.23999 10.31V13.7C6.23999 14.53 6.83 15.54 7.56 15.94L10.76 17.72C11.44 18.1 12.56 18.1 13.25 17.72L16.45 15.94C17.17 15.54 17.77 14.53 17.77 13.7V10.3C17.77 9.46998 17.18 8.45998 16.45 8.05998L13.25 6.27998C12.56 5.89998 11.44 5.89998 10.76 6.28998Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default ThreedSquareLinearIcon;
      