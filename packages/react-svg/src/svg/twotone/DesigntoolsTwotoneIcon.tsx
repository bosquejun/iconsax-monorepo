
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const DesigntoolsTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M10.4293 17.6198C10.4293 18.7198 10.0093 19.7698 9.2193 20.5698C8.6093 21.1798 7.7793 21.5998 6.7893 21.7298L4.3293 21.9998C2.9893 22.1498 1.8393 21.0098 1.9993 19.6498L2.2693 17.1898C2.5093 14.9998 4.3393 13.5998 6.2793 13.5598C6.4793 13.5498 6.6893 13.5598 6.8793 13.5698C7.7293 13.6798 8.5593 14.0698 9.2393 14.7598C9.9093 15.4298 10.2893 16.2098 10.3993 17.0498C10.4093 17.2398 10.4293 17.4298 10.4293 17.6198Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M20.1207 12.73L20.8607 13.46C22.3507 14.95 22.3507 16.42 20.8607 17.91L17.9007 20.87C16.4307 22.34 14.9407 22.34 13.4707 20.87" stroke={color} stroke-width="1.5" stroke-linecap="round" />
<path d="M3.11031 10.5101C1.64031 9.02006 1.64031 7.55006 3.11031 6.06006L6.07031 3.10006C7.54031 1.63006 9.03031 1.63006 10.5003 3.10006L11.2403 3.84006" stroke={color} stroke-width="1.5" stroke-linecap="round" />
<path opacity="0.4" d="M11.2508 3.8501L7.55078 7.5501" stroke={color} stroke-width="1.5" stroke-linecap="round" />
<path opacity="0.4" d="M20.1202 12.73L17.1602 15.68" stroke={color} stroke-width="1.5" stroke-linecap="round" />
        </svg>
      )
    }
    
    
    export default DesigntoolsTwotoneIcon;
      