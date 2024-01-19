
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const SidebarRightBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M7.81 2C6.32 2 5.08 2.36 4.13 3.05C3.71 3.34 3.34 3.71 3.05 4.13C2.36 5.08 2 6.32 2 7.81V16.19C2 19.83 4.17 22 7.81 22H15.28V2H7.81ZM12.12 12.53L9.56 15.09C9.41 15.24 9.22 15.31 9.03 15.31C8.84 15.31 8.65 15.24 8.5 15.09C8.21 14.8 8.21 14.32 8.5 14.03L10.52 12L8.5 9.97C8.2 9.68 8.2 9.2 8.5 8.91C8.8 8.62 9.27 8.62 9.56 8.91L12.12 11.47C12.41 11.76 12.41 12.24 12.12 12.53Z" fill={color} />
<path d="M16.7793 2.03125V21.9812C18.0093 21.9012 19.0493 21.5513 19.8693 20.9513C20.2893 20.6612 20.6593 20.2913 20.9493 19.8713C21.6393 18.9212 21.9993 17.6813 21.9993 16.1913V7.81125C21.9993 4.37125 20.0593 2.24125 16.7793 2.03125Z" fill={color} />
        </svg>
      )
    }
    
    
    export default SidebarRightBoldIcon;
      