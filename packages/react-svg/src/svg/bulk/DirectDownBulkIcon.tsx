
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const DirectDownBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M17.0192 2.7202L13.5392 4.4602C12.5692 4.9402 11.4392 4.9402 10.4692 4.4602L6.97924 2.7102C3.99924 1.2202 0.849241 4.4402 2.40924 7.3902L3.22924 8.9302C3.33924 9.1402 3.51924 9.3102 3.73924 9.4102L16.3892 15.1002C16.9092 15.3302 17.5192 15.1202 17.7792 14.6202L21.5892 7.3802C23.1392 4.4402 19.9992 1.2202 17.0192 2.7202Z" fill={color} />
<path opacity="0.4" d="M15.6004 16.3102L7.32045 12.5802C6.39045 12.1602 5.45045 13.1602 5.93045 14.0602L8.97045 19.8302C10.2604 22.2802 13.7604 22.2802 15.0504 19.8302L16.1204 17.7902C16.4004 17.2402 16.1604 16.5702 15.6004 16.3102Z" fill={color} />
        </svg>
      )
    }
    
    
    export default DirectDownBulkIcon;
      