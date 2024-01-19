
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Brush2TwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M10.9707 2H8.9707C3.9707 2 1.9707 4 1.9707 9V15C1.9707 20 3.9707 22 8.9707 22H14.9707C19.9707 22 21.9707 20 21.9707 15V13" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M21.8795 3.56022C20.6495 6.63022 17.5595 10.8102 14.9795 12.8802L13.3995 14.1402C13.1995 14.2902 12.9995 14.4102 12.7695 14.5002C12.7695 14.3502 12.7595 14.2002 12.7395 14.0402C12.6495 13.3702 12.3495 12.7402 11.8095 12.2102C11.2595 11.6602 10.5995 11.3502 9.91945 11.2602C9.75945 11.2502 9.59945 11.2402 9.43945 11.2502C9.52945 11.0002 9.65945 10.7702 9.82945 10.5802L11.0895 9.00022C13.1595 6.42022 17.3495 3.31022 20.4095 2.08022C20.8795 1.90022 21.3395 2.04022 21.6295 2.33022C21.9295 2.63022 22.0695 3.09022 21.8795 3.56022Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12.7801 14.49C12.7801 15.37 12.4401 16.21 11.8101 16.85C11.3201 17.34 10.6601 17.68 9.87009 17.78L7.90009 17.99C6.83009 18.11 5.91009 17.2 6.03009 16.11L6.24009 14.14C6.43009 12.39 7.89009 11.27 9.45009 11.24C9.61009 11.23 9.77009 11.24 9.93009 11.25C10.6101 11.34 11.2701 11.65 11.8201 12.2C12.3601 12.74 12.6601 13.36 12.7501 14.03C12.7701 14.19 12.7801 14.35 12.7801 14.49Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M15.8193 11.9799C15.8193 9.88994 14.1293 8.18994 12.0293 8.18994" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default Brush2TwotoneIcon;
      