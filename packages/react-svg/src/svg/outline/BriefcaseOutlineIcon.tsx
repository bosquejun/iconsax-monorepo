
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const BriefcaseOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M16.0002 22.75H8.00023C3.38023 22.75 2.52023 20.6 2.30023 18.51L1.55023 10.5C1.44023 9.45001 1.41023 7.90001 2.45023 6.74001C3.35023 5.74001 4.84023 5.26001 7.00023 5.26001H17.0002C19.1702 5.26001 20.6602 5.75001 21.5502 6.74001C22.5902 7.90001 22.5602 9.45001 22.4502 10.51L21.7002 18.5C21.4802 20.6 20.6202 22.75 16.0002 22.75ZM7.00023 6.75001C5.31023 6.75001 4.15023 7.08001 3.56023 7.74001C3.07023 8.28001 2.91023 9.11001 3.04023 10.35L3.79023 18.36C3.96023 19.94 4.39023 21.25 8.00023 21.25H16.0002C19.6002 21.25 20.0402 19.94 20.2102 18.35L20.9602 10.36C21.0902 9.11001 20.9302 8.28001 20.4402 7.74001C19.8502 7.08001 18.6902 6.75001 17.0002 6.75001H7.00023Z" fill={color} />
<path d="M16 6.75C15.59 6.75 15.25 6.41 15.25 6V5.2C15.25 3.42 15.25 2.75 12.8 2.75H11.2C8.75 2.75 8.75 3.42 8.75 5.2V6C8.75 6.41 8.41 6.75 8 6.75C7.59 6.75 7.25 6.41 7.25 6V5.2C7.25 3.44 7.25 1.25 11.2 1.25H12.8C16.75 1.25 16.75 3.44 16.75 5.2V6C16.75 6.41 16.41 6.75 16 6.75Z" fill={color} />
<path d="M12 16.75C9.25 16.75 9.25 15.05 9.25 14.03V13C9.25 11.59 9.59 11.25 11 11.25H13C14.41 11.25 14.75 11.59 14.75 13V14C14.75 15.04 14.75 16.75 12 16.75ZM10.75 12.75C10.75 12.83 10.75 12.92 10.75 13V14.03C10.75 15.06 10.75 15.25 12 15.25C13.25 15.25 13.25 15.09 13.25 14.02V13C13.25 12.92 13.25 12.83 13.25 12.75C13.17 12.75 13.08 12.75 13 12.75H11C10.92 12.75 10.83 12.75 10.75 12.75Z" fill={color} />
<path d="M13.9995 14.77C13.6295 14.77 13.2995 14.49 13.2595 14.11C13.2095 13.7 13.4995 13.32 13.9095 13.27C16.5495 12.94 19.0795 11.94 21.2095 10.39C21.5395 10.14 22.0095 10.22 22.2595 10.56C22.4995 10.89 22.4295 11.36 22.0895 11.61C19.7495 13.31 16.9895 14.4 14.0895 14.77C14.0595 14.77 14.0295 14.77 13.9995 14.77Z" fill={color} />
<path d="M10.0007 14.7799C9.97072 14.7799 9.94072 14.7799 9.91072 14.7799C7.17072 14.4699 4.50072 13.4699 2.19072 11.8899C1.85072 11.6599 1.76072 11.1899 1.99072 10.8499C2.22072 10.5099 2.69072 10.4199 3.03072 10.6499C5.14072 12.0899 7.57072 12.9999 10.0707 13.2899C10.4807 13.3399 10.7807 13.7099 10.7307 14.1199C10.7007 14.4999 10.3807 14.7799 10.0007 14.7799Z" fill={color} />
        </svg>
      )
    }
    
    
    export default BriefcaseOutlineIcon;
      