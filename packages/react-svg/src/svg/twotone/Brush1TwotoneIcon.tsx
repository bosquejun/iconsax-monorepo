
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Brush1TwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M21.8095 3.93988C20.2695 7.77988 16.4095 12.9999 13.1795 15.5899L11.2095 17.1699C10.9595 17.3499 10.7095 17.5099 10.4295 17.6199C10.4295 17.4399 10.4195 17.2399 10.3895 17.0499C10.2795 16.2099 9.89953 15.4299 9.22953 14.7599C8.54953 14.0799 7.71953 13.6799 6.86953 13.5699C6.66953 13.5599 6.46953 13.5399 6.26953 13.5599C6.37953 13.2499 6.54953 12.9599 6.75953 12.7199L8.31953 10.7499C10.8995 7.51988 16.1395 3.63988 19.9695 2.10988C20.5595 1.88988 21.1295 2.04988 21.4895 2.41988C21.8695 2.78988 22.0495 3.35988 21.8095 3.93988Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M10.4293 17.6198C10.4293 18.7198 10.0093 19.7698 9.2193 20.5698C8.6093 21.1798 7.7793 21.5998 6.7893 21.7298L4.3293 21.9998C2.9893 22.1498 1.8393 21.0098 1.9993 19.6498L2.2693 17.1898C2.5093 14.9998 4.3393 13.5998 6.2793 13.5598C6.4793 13.5498 6.6893 13.5598 6.8793 13.5698C7.7293 13.6798 8.5593 14.0698 9.2393 14.7598C9.9093 15.4298 10.2893 16.2098 10.3993 17.0498C10.4093 17.2398 10.4293 17.4298 10.4293 17.6198Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M14.2398 14.4702C14.2398 11.8602 12.1198 9.74023 9.50977 9.74023" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default Brush1TwotoneIcon;
      