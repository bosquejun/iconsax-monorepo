
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const CakeBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M2 22H22" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M17.5605 10C19.4005 10 20.8905 11.34 20.8905 13V22" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M3.10938 22V13C3.10938 11.34 4.59938 10 6.43938 10H13.2994" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M5.56055 10V7.17C5.56055 5.97 6.64055 5 7.98055 5H16.0305C17.3605 5 18.4405 5.97 18.4405 7.17V10" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M20.4702 14H20.0202C19.2802 14 18.6702 14.6 18.6702 15.35V15.66C18.6702 16.4 18.0702 17.01 17.3202 17.01C16.5802 17.01 15.9702 16.41 15.9702 15.66V15.35C15.9702 14.61 15.3702 14 14.6202 14C13.8802 14 13.2702 14.6 13.2702 15.35V15.66C13.2702 16.4 12.6702 17.01 11.9202 17.01C11.1802 17.01 10.5702 16.41 10.5702 15.66V15.35C10.6002 14.6 10.0002 14 9.26016 14C8.52016 14 7.91016 14.6 7.91016 15.35" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M3.5293 13.98L3.8993 13.99C4.6393 14 5.2293 14.6 5.2293 15.34V15.67C5.2293 16.41 5.8293 17.02 6.5793 17.02" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M8 5V3" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M16 5V3" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12 5V2" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default CakeBrokenIcon;
      