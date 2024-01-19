
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const CloudPlusBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12.9707 20H8.9707" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M10.9707 22V18" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12.0001 3.98007C8.01007 3.64007 3.66007 7.09007 5.62007 12.5601" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M16.6109 20C17.9509 20.01 19.2409 19.51 20.2309 18.61C23.5009 15.75 21.7509 10.01 17.4409 9.47002C17.2009 8.02002 16.6709 6.88002 15.9609 6.02002" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M7.27938 12.9701C6.74938 12.7001 6.15938 12.5601 5.56938 12.5701C0.909376 12.9001 0.919376 19.6801 5.56938 20.0101" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M15.8203 9.88998C16.3403 9.62998 16.9003 9.48998 17.4803 9.47998" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default CloudPlusBrokenIcon;
      