
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const OmegaCircleBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M17 16.5H13.9L15.52 14.71C16.32 13.82 16.76 12.69 16.76 11.53C16.76 10.33 16.26 9.18002 15.37 8.33002C14.48 7.48002 13.27 7 12 7C10.74 7 9.53 7.48002 8.63 8.33002C7.74 9.18002 7.23999 10.33 7.23999 11.53C7.23999 12.7 7.67998 13.83 8.47998 14.71L10.1 16.5H7" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.19997 2.29998 7.96997 2.84998" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default OmegaCircleBrokenIcon;
      