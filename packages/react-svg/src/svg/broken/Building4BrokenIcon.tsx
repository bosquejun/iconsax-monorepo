
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Building4BrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M1 22H23" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M19.7793 22.0101V17.55" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M19.7996 10.8901C18.5796 10.8901 17.5996 11.8701 17.5996 13.0901V15.3601C17.5996 16.5801 18.5796 17.5601 19.7996 17.5601C21.0196 17.5601 21.9996 16.5801 21.9996 15.3601V13.0901C21.9996 11.8701 21.0196 10.8901 19.7996 10.8901Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2.09961 6.02002C2.09961 4.01002 3.09966 3 5.08966 3H11.3196C13.3096 3 14.2996 4.01002 14.2996 6.02002V22" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2.09961 22V10.01" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M5.80078 8.25H10.7508" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M5.80078 12H10.7508" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M8.25 22V18.25" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default Building4BrokenIcon;
      