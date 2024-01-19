
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ShipTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M20.4198 12.3702C21.2898 12.7202 21.8297 13.7502 21.6297 14.6602L21.2197 16.5202C20.5097 19.7202 17.9997 22.0002 14.3797 22.0002H9.61974C5.99974 22.0002 3.48974 19.7202 2.77974 16.5202L2.36974 14.6602C2.16974 13.7502 2.70973 12.7202 3.57973 12.3702L4.99974 11.8002L10.5098 9.59018C11.4698 9.21018 12.5297 9.21018 13.4897 9.59018L18.9997 11.8002L20.4198 12.3702Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12 22V10" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default ShipTwotoneIcon;
      