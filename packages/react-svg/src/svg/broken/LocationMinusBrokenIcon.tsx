
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const LocationMinusBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M9.25 11H14.75" stroke={color} stroke-width="1.5" stroke-linecap="round" />
<path d="M5.98094 4.30006C10.3509 0.190061 18.8209 1.60006 20.3809 8.51006C21.5309 13.5901 18.3709 17.8901 15.6009 20.5501C13.5909 22.4901 10.4109 22.4901 8.39094 20.5501C5.63094 17.8801 2.46094 13.5801 3.62094 8.50006" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default LocationMinusBrokenIcon;
      