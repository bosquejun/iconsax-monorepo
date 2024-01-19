
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const SmallcapsBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M10.4004 2.57007H16.7604C17.7804 2.57007 18.6104 3.40007 18.6104 4.42007V5.93007" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M1.99023 5.93007V4.42007C1.99023 3.40007 2.82023 2.57007 3.84023 2.57007H6.59023" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M10.3008 18.1001V3.32007V2.57007" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M6.90039 18.1001H12.4804" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M13.6797 10.3401H20.6897C21.4197 10.3401 22.0097 10.9301 22.0097 11.6601V12.4601" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M16.0801 21.4301V10.8701" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M13.9395 21.4299H18.2195" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default SmallcapsBrokenIcon;
      