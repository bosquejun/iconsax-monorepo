
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const SidebarBottomBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M3.04953 19.8713C3.33953 20.2913 3.70953 20.6613 4.12953 20.9513C5.07953 21.6413 6.31953 22.0012 7.80953 22.0012H16.1895C19.6295 22.0012 21.7595 20.0612 21.9695 16.7812H2.01953C2.09953 18.0113 2.44953 19.0513 3.04953 19.8713Z" fill={color} />
<path d="M20.95 4.13C20.66 3.71 20.29 3.34 19.87 3.05C18.92 2.36 17.68 2 16.19 2H7.81C4.17 2 2 4.17 2 7.81V15.28H22V7.81C22 6.32 21.64 5.08 20.95 4.13ZM15.09 9.56L12.53 12.12C12.24 12.41 11.76 12.41 11.47 12.12L8.91 9.56C8.76 9.41 8.69 9.22 8.69 9.03C8.69 8.84 8.76 8.64 8.91 8.5C9.2 8.2 9.68 8.2 9.97 8.5L12 10.52L14.03 8.49C14.32 8.2 14.8 8.2 15.09 8.49C15.38 8.78 15.38 9.26 15.09 9.56Z" fill={color} />
        </svg>
      )
    }
    
    
    export default SidebarBottomBoldIcon;
      