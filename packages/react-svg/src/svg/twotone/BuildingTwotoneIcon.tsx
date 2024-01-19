
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const BuildingTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12.4997 22.0003H4.07973C2.91973 22.0003 1.96973 21.0703 1.96973 19.9303V5.09035C1.96973 2.47035 3.91973 1.28035 6.30973 2.45035L10.7497 4.63035C11.7097 5.10035 12.4997 6.35035 12.4997 7.41035V22.0003Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M21.97 15.0604V18.8404C21.97 21.0004 20.97 22.0004 18.81 22.0004H12.5V10.4204L12.97 10.5204L17.47 11.5304L19.5 11.9804C20.82 12.2704 21.9 12.9504 21.96 14.8704C21.97 14.9304 21.97 14.9904 21.97 15.0604Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M5.5 9.00049H8.97" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M5.5 13.0005H8.97" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M17.4697 11.5305V14.7505C17.4697 15.9905 16.4597 17.0005 15.2197 17.0005C13.9797 17.0005 12.9697 15.9905 12.9697 14.7505V10.5205L17.4697 11.5305Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M21.9597 14.8703C21.8997 16.0503 20.9197 17.0003 19.7197 17.0003C18.4797 17.0003 17.4697 15.9903 17.4697 14.7503V11.5303L19.4997 11.9803C20.8197 12.2703 21.8997 12.9503 21.9597 14.8703Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default BuildingTwotoneIcon;
      