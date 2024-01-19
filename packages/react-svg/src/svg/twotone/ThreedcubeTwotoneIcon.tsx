
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ThreedcubeTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12.92 2.25984L19.43 5.76984C20.19 6.17984 20.19 7.34984 19.43 7.75984L12.92 11.2698C12.34 11.5798 11.66 11.5798 11.08 11.2698L4.57 7.75984C3.81 7.34984 3.81 6.17984 4.57 5.76984L11.08 2.25984C11.66 1.94984 12.34 1.94984 12.92 2.25984Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M3.61 10.1302L9.66 13.1602C10.41 13.5402 10.89 14.3102 10.89 15.1502V20.8702C10.89 21.7002 10.02 22.2302 9.28 21.8602L3.23 18.8302C2.48 18.4502 2 17.6802 2 16.8402V11.1202C2 10.2902 2.87 9.76017 3.61 10.1302Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M20.3894 10.1302L14.3394 13.1602C13.5894 13.5402 13.1094 14.3102 13.1094 15.1502V20.8702C13.1094 21.7002 13.9794 22.2302 14.7194 21.8602L20.7694 18.8302C21.5194 18.4502 21.9994 17.6802 21.9994 16.8402V11.1202C21.9994 10.2902 21.1294 9.76017 20.3894 10.1302Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default ThreedcubeTwotoneIcon;
      