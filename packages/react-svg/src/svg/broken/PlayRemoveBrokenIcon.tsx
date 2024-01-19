
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const PlayRemoveBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M9.38086 12.0001V10.6101C9.38086 8.89008 10.6009 8.18007 12.0909 9.04007L13.2909 9.73007L14.4908 10.4201C15.9808 11.2801 15.9808 12.6901 14.4908 13.5501L13.2909 14.2401L12.0909 14.9301C10.6009 15.7901 9.38086 15.0901 9.38086 13.3601V12.0001Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M20.0692 20.0399L17.9492 17.9299" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M20.0497 17.96L17.9297 20.0699" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M23 19C23 19.75 22.79 20.46 22.42 21.06C22.21 21.42 21.94 21.74 21.63 22C20.93 22.63 20.01 23 19 23C17.63 23 16.43 22.31 15.73 21.27C15.67 21.2 15.62 21.13 15.58 21.06C15.21 20.46 15 19.75 15 19C15 17.74 15.58 16.61 16.5 15.88C17.19 15.33 18.06 15 19 15C19.84 15 20.63 15.27 21.28 15.72C22.32 16.44 23 17.64 23 19Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M7.9707 2.84998C9.2007 2.29998 10.5707 2 12.0007 2C17.5207 2 22.0007 6.48 22.0007 12C22.0007 13.31 21.7507 14.57 21.2807 15.72" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C13.32 22 14.58 21.74 15.73 21.27" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default PlayRemoveBrokenIcon;
      