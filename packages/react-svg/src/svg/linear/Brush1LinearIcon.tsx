
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Brush1LinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M10.97 2H8.97C3.97 2 1.97 4 1.97 9V15C1.97 20 3.97 22 8.97 22H14.97C19.97 22 21.97 20 21.97 15V13" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M21.88 3.55998C20.65 6.62998 17.56 10.81 14.98 12.88L13.4 14.14C13.2 14.29 13 14.41 12.77 14.5C12.77 14.35 12.76 14.2 12.74 14.04C12.65 13.37 12.35 12.74 11.81 12.21C11.26 11.66 10.6 11.35 9.92 11.26C9.76 11.25 9.6 11.24 9.44 11.25C9.53 11 9.66 10.77 9.83 10.58L11.09 8.99998C13.16 6.41998 17.35 3.30998 20.41 2.07998C20.88 1.89998 21.34 2.03998 21.63 2.32998C21.93 2.62998 22.07 3.08998 21.88 3.55998Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12.78 14.49C12.78 15.37 12.44 16.21 11.81 16.85C11.32 17.34 10.66 17.68 9.87 17.78L7.9 17.99C6.83 18.11 5.91 17.2 6.03 16.11L6.24 14.14C6.43 12.39 7.89 11.27 9.45 11.24C9.61 11.23 9.77 11.24 9.93 11.25C10.61 11.34 11.27 11.65 11.82 12.2C12.36 12.74 12.66 13.36 12.75 14.03C12.77 14.19 12.78 14.35 12.78 14.49Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M15.82 11.9799C15.82 9.88994 14.13 8.18994 12.03 8.18994" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default Brush1LinearIcon;
      