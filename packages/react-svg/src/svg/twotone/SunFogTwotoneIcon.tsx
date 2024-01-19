
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const SunFogTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M18.5 12C18.5 8.41 15.59 5.5 12 5.5C8.41 5.5 5.5 8.41 5.5 12" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M4.98999 4.98999L4.85999 4.85999M19.01 4.98999L19.14 4.85999L19.01 4.98999ZM12 2.07999V2V2.07999ZM2.08002 12H2H2.08002ZM22 12H21.92H22Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M4 15H20" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M6 18H18" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M9 21H15" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default SunFogTwotoneIcon;
      