
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const UserSquareOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M15.0006 22.75H9.00063C7.68063 22.75 6.58063 22.62 5.65063 22.34C5.31063 22.24 5.09063 21.91 5.11063 21.56C5.36063 18.57 8.39063 16.22 12.0006 16.22C15.6106 16.22 18.6306 18.56 18.8906 21.56C18.9206 21.92 18.7006 22.24 18.3506 22.34C17.4206 22.62 16.3206 22.75 15.0006 22.75ZM6.72063 21.06C7.38063 21.19 8.13063 21.25 9.00063 21.25H15.0006C15.8706 21.25 16.6206 21.19 17.2806 21.06C16.7506 19.14 14.5606 17.72 12.0006 17.72C9.44063 17.72 7.25063 19.14 6.72063 21.06Z" fill={color} />
<path d="M15 2H9C4 2 2 4 2 9V15C2 18.78 3.14 20.85 5.86 21.62C6.08 19.02 8.75 16.97 12 16.97C15.25 16.97 17.92 19.02 18.14 21.62C20.86 20.85 22 18.78 22 15V9C22 4 20 2 15 2ZM12 14.17C10.02 14.17 8.42 12.56 8.42 10.58C8.42 8.60002 10.02 7 12 7C13.98 7 15.58 8.60002 15.58 10.58C15.58 12.56 13.98 14.17 12 14.17Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M11.9999 14.92C9.60992 14.92 7.66992 12.97 7.66992 10.58C7.66992 8.19002 9.60992 6.25 11.9999 6.25C14.3899 6.25 16.3299 8.19002 16.3299 10.58C16.3299 12.97 14.3899 14.92 11.9999 14.92ZM11.9999 7.75C10.4399 7.75 9.16992 9.02002 9.16992 10.58C9.16992 12.15 10.4399 13.42 11.9999 13.42C13.5599 13.42 14.8299 12.15 14.8299 10.58C14.8299 9.02002 13.5599 7.75 11.9999 7.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default UserSquareOutlineIcon;
      