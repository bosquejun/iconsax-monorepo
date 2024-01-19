
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MusicSquareRemoveBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M2 8.65002C2 3.90002 3.9 2 8.65 2H14.35C19.1 2 21 3.90002 21 8.65002V14.35C21 14.69 20.99 15.02 20.97 15.33C20.25 14.51 19.18 14 18 14C15.79 14 14 15.79 14 18C14 18.75 14.21 19.46 14.58 20.06C14.78 20.4 15.04 20.71 15.34 20.97C15.03 20.99 14.7 21 14.35 21H8.65C3.9 21 2 19.1 2 14.35V12.97" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M6.71954 14.42C7.52035 14.42 8.16953 13.7708 8.16953 12.97C8.16953 12.1692 7.52035 11.52 6.71954 11.52C5.91872 11.52 5.26953 12.1692 5.26953 12.97C5.26953 13.7708 5.91872 14.42 6.71954 14.42Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M13.4699 12V6.34001C13.4699 5.13001 12.7099 4.96997 11.9499 5.17997L9.05992 5.96995C8.53992 6.10995 8.16992 6.52999 8.16992 7.12999V8.14V8.81999V12.97" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12.0301 13.4501C12.8309 13.4501 13.4801 12.8009 13.4801 12.0001C13.4801 11.1992 12.8309 10.55 12.0301 10.55C11.2293 10.55 10.5801 11.1992 10.5801 12.0001C10.5801 12.8009 11.2293 13.4501 12.0301 13.4501Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M8.16992 8.8299L13.4699 7.37988" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M22 18C22 18.75 21.79 19.46 21.42 20.06C20.73 21.22 19.46 22 18 22C16.97 22 16.04 21.61 15.34 20.97C15.04 20.71 14.78 20.4 14.58 20.06C14.21 19.46 14 18.75 14 18C14 15.79 15.79 14 18 14C19.18 14 20.25 14.51 20.97 15.33C21.61 16.04 22 16.98 22 18Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M19.0692 19.0399L16.9492 16.9299" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M19.0497 16.96L16.9297 19.0699" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default MusicSquareRemoveBrokenIcon;
      