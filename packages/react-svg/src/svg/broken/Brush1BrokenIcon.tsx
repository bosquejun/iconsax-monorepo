
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Brush1BrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M1.9707 12.9399V14.9999C1.9707 19.9999 3.9707 21.9999 8.9707 21.9999H14.9707C19.9707 21.9999 21.9707 19.9999 21.9707 14.9999V12.9999" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M10.9707 2H8.9707C3.9707 2 1.9707 4 1.9707 9" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M18.5092 2.99998C19.1692 2.62998 19.8092 2.31998 20.4092 2.07998C20.8792 1.89998 21.3392 2.03998 21.6292 2.32998C21.9292 2.62998 22.0792 3.08998 21.8892 3.55998C20.6592 6.62998 17.5692 10.81 14.9892 12.88L13.4092 14.14C13.2092 14.29 13.0092 14.41 12.7792 14.5C12.7792 14.35 12.7692 14.2 12.7492 14.04C12.6592 13.37 12.3592 12.74 11.8192 12.21C11.2692 11.66 10.6092 11.35 9.92922 11.26C9.76922 11.25 9.60922 11.24 9.44922 11.25C9.53922 11 9.66922 10.77 9.83922 10.58L11.0892 8.99998C12.1592 7.65998 13.8092 6.17998 15.5792 4.88998" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12.7801 14.49C12.7801 15.37 12.4401 16.21 11.8101 16.85C11.3201 17.34 10.6601 17.68 9.87009 17.78L7.90009 17.99C6.83009 18.11 5.91009 17.2 6.03009 16.11L6.24009 14.14C6.43009 12.39 7.89009 11.27 9.45009 11.24C9.61009 11.23 9.77009 11.24 9.93009 11.25C10.6101 11.34 11.2701 11.65 11.8201 12.2C12.3601 12.74 12.6601 13.36 12.7501 14.03C12.7701 14.19 12.7801 14.35 12.7801 14.49Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M15.8193 11.9799C15.8193 9.88994 14.1293 8.18994 12.0293 8.18994" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default Brush1BrokenIcon;
      