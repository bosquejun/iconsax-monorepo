
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const BrifecaseTickBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M21.091 6.97953C20.241 6.03953 18.831 5.56953 16.761 5.56953H16.521V5.52953C16.521 3.84953 16.521 1.76953 12.761 1.76953H11.241C7.48101 1.76953 7.48101 3.84953 7.48101 5.52953V5.56953H7.24101C5.17101 5.56953 3.75101 6.03953 2.91101 6.97953C1.92101 8.08953 1.95101 9.55953 2.05101 10.5695L2.06101 10.6395L2.1301 11.4455C2.14329 11.5994 2.22683 11.7387 2.35655 11.8227C2.64024 12.0063 2.94207 12.199 3.23101 12.3595C3.37101 12.4495 3.52101 12.5295 3.67101 12.6095C4.80101 13.2295 6.01101 13.7195 7.25101 14.0595C7.28101 16.6495 9.40101 18.7495 12.001 18.7495C14.621 18.7495 16.751 16.6195 16.751 13.9995V13.9595C18.011 13.5795 19.221 13.0495 20.351 12.3895C20.411 12.3595 20.451 12.3295 20.501 12.2995C20.8956 12.0851 21.305 11.8043 21.6786 11.5395C21.7948 11.457 21.8698 11.3285 21.8852 11.1868L21.951 10.5795C21.961 10.5195 21.961 10.4695 21.971 10.3995C22.051 9.39953 22.031 8.01953 21.091 6.97953ZM8.91101 5.52953C8.91101 3.82953 8.91101 3.18953 11.241 3.18953H12.761C15.091 3.18953 15.091 3.82953 15.091 5.52953V5.56953H8.91101V5.52953ZM12.001 17.2495C10.351 17.2495 8.98101 16.0095 8.78101 14.4095C8.76101 14.2795 8.75101 14.1395 8.75101 13.9995C8.75101 12.2095 10.211 10.7495 12.001 10.7495C13.791 10.7495 15.251 12.2095 15.251 13.9995C15.251 14.1195 15.241 14.2295 15.231 14.3395V14.3495C15.051 15.9795 13.671 17.2495 12.001 17.2495Z" fill={color} />
<path d="M11.4289 16.0284C11.2389 16.0284 11.0489 15.9584 10.8989 15.8084L9.90891 14.8284C9.61891 14.5384 9.61891 14.0584 9.90891 13.7684C10.1989 13.4784 10.6789 13.4784 10.9689 13.7684L11.4489 14.2484L13.0589 12.7684C13.3589 12.4884 13.8389 12.5084 14.1189 12.8084C14.3989 13.1084 14.3789 13.5884 14.0789 13.8684L11.9489 15.8384C11.7889 15.9584 11.6089 16.0284 11.4289 16.0284Z" fill={color} />
<path d="M21.0416 13.7311C21.2903 13.5929 21.6129 13.7931 21.587 14.0765L21.2316 17.9611C21.0216 19.9611 20.2016 22.0011 15.8016 22.0011H8.18156C3.78156 22.0011 2.96156 19.9611 2.76156 17.9711L2.41569 14.2678C2.38884 13.9802 2.69635 13.786 2.95156 13.9211C3.73156 14.3511 4.54156 14.7311 5.37156 15.0311C5.68156 15.1411 5.90156 15.4011 5.99156 15.7211C6.74156 18.3211 9.16156 20.2511 12.0016 20.2511C14.8916 20.2511 17.3316 18.2811 18.0416 15.5811C18.1216 15.2611 18.3416 15.0011 18.6516 14.8811C19.4916 14.5511 20.2916 14.1611 21.0416 13.7311Z" fill={color} />
        </svg>
      )
    }
    
    
    export default BrifecaseTickBoldIcon;
      