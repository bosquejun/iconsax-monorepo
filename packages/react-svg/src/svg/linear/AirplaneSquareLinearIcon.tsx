
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const AirplaneSquareLinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M9.86002 19L11.54 17.58C11.79 17.37 12.21 17.37 12.47 17.58L14.14 19C14.53 19.2 15.01 19 15.15 18.58L15.47 17.62C15.55 17.39 15.47 17.05 15.3 16.88L13.66 15.23C13.54 15.11 13.45 14.88 13.45 14.72V12.87C13.45 12.45 13.76 12.25 14.15 12.41L17.5 13.85C18.05 14.09 18.51 13.79 18.51 13.19V12.26C18.51 11.78 18.15 11.22 17.7 11.03L13.76 9.32999C13.59 9.25999 13.46 9.04999 13.46 8.86999V6.79999C13.46 6.11999 12.96 5.31999 12.36 5.00999C12.14 4.89999 11.89 4.89999 11.67 5.00999C11.06 5.30999 10.57 6.11999 10.57 6.79999V8.86999C10.57 9.04999 10.43 9.25999 10.27 9.32999L6.33002 11.03C5.89002 11.22 5.52002 11.78 5.52002 12.26V13.19C5.52002 13.79 5.97002 14.09 6.53002 13.85L9.88002 12.41C10.26 12.24 10.58 12.45 10.58 12.87V14.72C10.58 14.89 10.48 15.12 10.37 15.23L8.70002 16.87C8.53002 17.04 8.45002 17.38 8.53002 17.61L8.85002 18.57C8.99002 19 9.46002 19.2 9.86002 19Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default AirplaneSquareLinearIcon;
      