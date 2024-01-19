
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const DesigntoolsBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M17.9998 3.02011C18.6798 2.66011 19.3398 2.35011 19.9598 2.10011C20.5498 1.88011 21.1198 2.04011 21.4798 2.41011C21.8598 2.79011 22.0398 3.36011 21.7998 3.95011C20.2598 7.79011 16.3998 13.0101 13.1698 15.6001L11.1998 17.1801C10.9498 17.3601 10.6998 17.5201 10.4198 17.6301C10.4198 17.4501 10.4098 17.2501 10.3798 17.0601C10.2698 16.2201 9.88977 15.4401 9.21977 14.7701C8.53977 14.0901 7.70977 13.6901 6.85977 13.5801C6.65977 13.5701 6.45977 13.5501 6.25977 13.5701C6.36977 13.2601 6.53977 12.9701 6.74977 12.7301L8.30977 10.7601C9.75977 8.95011 12.0398 6.94011 14.4298 5.25011" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M10.4293 17.6198C10.4293 18.7198 10.0093 19.7698 9.2193 20.5698C8.6093 21.1798 7.7793 21.5998 6.7893 21.7298L4.3293 21.9998C2.9893 22.1498 1.8393 21.0098 1.9993 19.6498L2.2693 17.1898C2.5093 14.9998 4.3393 13.5998 6.2793 13.5598C6.4793 13.5498 6.6893 13.5598 6.8793 13.5698C7.7293 13.6798 8.5593 14.0698 9.2393 14.7598C9.9093 15.4298 10.2893 16.2098 10.3993 17.0498C10.4093 17.2398 10.4293 17.4298 10.4293 17.6198Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M14.2398 14.4702C14.2398 11.8602 12.1198 9.74023 9.50977 9.74023" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M20.1207 12.73L20.8607 13.46C22.3507 14.95 22.3507 16.42 20.8607 17.91L17.9007 20.87C16.4307 22.34 14.9407 22.34 13.4707 20.87" stroke={color} stroke-width="1.5" stroke-linecap="round" />
<path d="M3.11031 10.5101C1.64031 9.02006 1.64031 7.55006 3.11031 6.06006L6.07031 3.10006C7.54031 1.63006 9.03031 1.63006 10.5003 3.10006L11.2403 3.84006" stroke={color} stroke-width="1.5" stroke-linecap="round" />
<path d="M11.2508 3.8501L7.55078 7.5501" stroke={color} stroke-width="1.5" stroke-linecap="round" />
<path d="M20.1202 12.73L17.1602 15.68" stroke={color} stroke-width="1.5" stroke-linecap="round" />
        </svg>
      )
    }
    
    
    export default DesigntoolsBrokenIcon;
      