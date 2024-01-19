
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ThreedcubeBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M19.43 7.76009C20.19 7.35009 20.19 6.18009 19.43 5.77009L12.92 2.26009C12.34 1.95009 11.66 1.95009 11.08 2.26009L4.57 5.77009C3.81 6.18009 3.81 7.35009 4.57 7.76009L11.08 11.2701C11.66 11.5801 12.34 11.5801 12.92 11.2701L15.26 10.0101" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2 11.1199C2 10.2899 2.87 9.75993 3.61 10.1299L9.66 13.1599C10.41 13.5399 10.89 14.3099 10.89 15.1499V20.8699C10.89 21.6999 10.02 22.2299 9.28 21.8599L3.23 18.8299C2.48 18.4499 2 17.6799 2 16.8399V14.9599" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M20.3894 10.1299L14.3394 13.1599C13.5894 13.5399 13.1094 14.3099 13.1094 15.1499V20.8699C13.1094 21.6999 13.9794 22.2299 14.7194 21.8599L20.7694 18.8299C21.5194 18.4499 21.9994 17.6799 21.9994 16.8399V11.1199C21.9994 10.2899 21.1294 9.75993 20.3894 10.1299Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default ThreedcubeBrokenIcon;
      