
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const JudgeLinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M20.0101 18.5101L15.0601 13.5601" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M15.06 13.56L11.52 17.1C10.74 17.88 9.47 17.88 8.69 17.1L4.44999 12.86C3.66999 12.08 3.66999 10.81 4.44999 10.03L11.52 2.96C12.3 2.18 13.57 2.18 14.35 2.96L18.59 7.20002C19.37 7.98002 19.37 9.25001 18.59 10.03L15.06 13.56Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2 21H8" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M6.56006 7.92004L13.6301 14.99" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default JudgeLinearIcon;
      