
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Ranking1BrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M8.67 14H4C2.9 14 2 14.9 2 16V22H8.67V14Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M15.3302 12C15.3302 10.9 14.4302 10 13.3302 10H10.6602C9.56016 10 8.66016 10.9 8.66016 12V22H15.3302V16" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M20.0001 17H15.3301V22H22.0001V19C22.0001 17.9 21.1001 17 20.0001 17Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12.5202 2.07007L13.0502 3.13006C13.1202 3.28006 13.3102 3.42006 13.4702 3.44006L14.4302 3.60007C15.0402 3.70007 15.1902 4.15005 14.7502 4.58005L14.0002 5.33005C13.8702 5.46005 13.8002 5.70006 13.8402 5.87006L14.0502 6.79007C14.2202 7.52007 13.8302 7.80007 13.1902 7.42007L12.2902 6.89007C12.1302 6.79007 11.8602 6.79007 11.7002 6.89007L10.8002 7.42007C10.1602 7.80007 9.77023 7.52007 9.94023 6.79007L10.1502 5.87006C10.1902 5.70006 10.1202 5.45005 9.99023 5.33005L9.25023 4.59006C8.81023 4.15006 8.95023 3.71005 9.57023 3.61005L10.5302 3.45007C10.6902 3.42007 10.8802 3.28007 10.9502 3.14007L11.4802 2.08005C11.7702 1.50005 12.2302 1.50007 12.5202 2.07007Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default Ranking1BrokenIcon;
      