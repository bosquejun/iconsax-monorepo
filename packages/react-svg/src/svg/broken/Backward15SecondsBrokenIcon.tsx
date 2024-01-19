
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Backward15SecondsBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M10.0195 4.46997L11.9995 2" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M3.99023 16.96C5.42023 19.94 8.47024 22 12.0002 22C16.9102 22 20.8903 18.02 20.8903 13.11C20.8903 8.19999 16.9102 4.21997 12.0002 4.21997C11.3202 4.21997 10.6603 4.31002 10.0203 4.46002" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M4.90936 7.80005C3.79936 9.28005 3.10938 11.11 3.10938 13.11" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M15.9606 10.8301H12.9006L12.1406 13.1201H14.4306C15.2706 13.1201 15.9606 13.8001 15.9606 14.6501C15.9606 15.4901 15.2806 16.1801 14.4306 16.1801H12.1406" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M9.53906 16.17V10.8301L8.03906 12.5001" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default Backward15SecondsBrokenIcon;
      