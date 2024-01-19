
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const SmileysLinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M14 6.19995V10C11.21 10.05 10.05 11.21 10 14H6.2C3.2 14 2 12.8 2 9.80005V6.19995C2 3.19995 3.2 2 6.2 2H9.8C12.8 2 14 3.19995 14 6.19995Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M6.96001 5.86996C6.43001 5.50996 5.73001 5.50998 5.20001 5.88998" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M10.96 5.86996C10.43 5.50996 9.73001 5.50998 9.20001 5.88998" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M8.15999 11.42H5.83999C5.53999 11.42 5.29999 11.18 5.29999 10.88C5.29999 9.39 6.50999 8.18005 7.99999 8.18005C8.63999 8.18005 9.22999 8.40002 9.68999 8.77002" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M22 14.2V17.8C22 20.8 20.8 22 17.8 22H14.2C11.2 22 10 20.8 10 17.8V14C10.05 11.21 11.21 10.05 14 10H17.8C20.8 10 22 11.2 22 14.2Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M14.96 13.62C14.43 13.98 13.73 13.98 13.2 13.6" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M18.96 13.62C18.43 13.98 17.73 13.98 17.2 13.6" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M13.84 16.1801H18.16C18.46 16.1801 18.7 16.42 18.7 16.72C18.7 18.21 17.49 19.42 16 19.42C14.51 19.42 13.3 18.21 13.3 16.72C13.3 16.42 13.54 16.1801 13.84 16.1801Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default SmileysLinearIcon;
      