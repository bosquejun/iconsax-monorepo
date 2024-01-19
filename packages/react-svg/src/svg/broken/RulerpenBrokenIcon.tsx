
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const RulerpenBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M14.4707 2C12.4707 2 11.4707 3 11.4707 5V19C11.4707 21 12.4707 22 14.4707 22H18.4707C20.4707 22 21.4707 21 21.4707 19V5C21.4707 3 20.4707 2 18.4707 2" stroke={color} stroke-width="1.5" stroke-linecap="round" />
<path d="M11.4707 6H16.4707" stroke={color} stroke-width="1.5" stroke-linecap="round" />
<path d="M11.4707 18H15.4707" stroke={color} stroke-width="1.5" stroke-linecap="round" />
<path d="M11.4707 13.95L16.4707 14" stroke={color} stroke-width="1.5" stroke-linecap="round" />
<path d="M11.4707 10H14.4707" stroke={color} stroke-width="1.5" stroke-linecap="round" />
<path d="M2.5293 9.02V4.95C2.5293 3.33 3.8593 2 5.4893 2C7.1093 2 8.4393 3.33 8.4393 4.95V17.91C8.4393 18.36 8.2493 19.04 8.0193 19.43L7.1993 20.79C6.2593 22.36 4.7093 22.36 3.7693 20.79L2.9493 19.43C2.7193 19.04 2.5293 18.36 2.5293 17.91V13.95" stroke={color} stroke-width="1.5" stroke-linecap="round" />
<path d="M8.4393 7H2.5293" stroke={color} stroke-width="1.5" stroke-linecap="round" />
        </svg>
      )
    }
    
    
    export default RulerpenBrokenIcon;
      