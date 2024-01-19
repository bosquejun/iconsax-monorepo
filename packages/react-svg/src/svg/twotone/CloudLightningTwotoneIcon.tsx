
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const CloudLightningTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M16.6097 19.9999C17.9497 20.0099 19.2397 19.5099 20.2297 18.6099C23.4997 15.7499 21.7497 10.0099 17.4397 9.46995C15.8997 0.129949 2.42973 3.66995 5.61973 12.5599" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M7.27938 12.9698C6.74938 12.6998 6.15938 12.5598 5.56938 12.5698C0.909376 12.8998 0.919376 19.6798 5.56938 20.0098" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M15.8203 9.88998C16.3403 9.62998 16.9003 9.48998 17.4803 9.47998" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M9.2291 19.1598H10.2291V21.4898C10.2291 21.8298 10.6591 21.9998 10.8791 21.7398L13.3291 18.9498C13.6291 18.6098 13.4991 18.3298 13.0491 18.3298H12.0491V15.9998C12.0491 15.6598 11.6191 15.4898 11.3991 15.7498L8.9491 18.5398C8.6491 18.8798 8.7791 19.1598 9.2291 19.1598Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default CloudLightningTwotoneIcon;
      