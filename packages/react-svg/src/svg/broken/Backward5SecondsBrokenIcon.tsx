
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Backward5SecondsBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M13.9099 10.8301H10.8499L10.0898 13.1201H12.3799C13.2199 13.1201 13.9099 13.8001 13.9099 14.6501C13.9099 15.4901 13.2299 16.1801 12.3799 16.1801H10.0898" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M10.0195 4.46997L11.9995 2" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M3.99023 16.96C5.42023 19.94 8.47024 22 12.0002 22C16.9102 22 20.8903 18.02 20.8903 13.11C20.8903 8.19999 16.9102 4.21997 12.0002 4.21997C11.3202 4.21997 10.6602 4.31002 10.0202 4.46002" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M4.90939 7.80005C3.79939 9.28005 3.10938 11.11 3.10938 13.11" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default Backward5SecondsBrokenIcon;
      