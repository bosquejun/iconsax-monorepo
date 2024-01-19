
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Frame2BrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M15.6792 3.96C16.1592 4.67 16.4392 5.52 16.4392 6.44C16.4292 8.84 14.5392 10.79 12.1592 10.87C12.0592 10.86 11.9392 10.86 11.8292 10.87C9.61922 10.8 7.82922 9.11 7.58922 6.95C7.29922 4.38 9.40922 2 11.9892 2" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M6.99078 14.56C4.57078 16.18 4.57078 18.82 6.99078 20.43C9.74078 22.27 14.2508 22.27 17.0008 20.43C19.4208 18.81 19.4208 16.17 17.0008 14.56C14.2708 12.73 9.76078 12.73 6.99078 14.56Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default Frame2BrokenIcon;
      