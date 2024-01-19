
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MessageSearchTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M13.2 21.3702C12.54 22.2502 11.46 22.2502 10.8 21.3702L9.29999 19.3702C9.12999 19.1502 8.77 18.9702 8.5 18.9702H8C4 18.9702 2 17.9702 2 12.9702V7.97021C2 3.97021 4 1.97021 8 1.97021H16C20 1.97021 22 3.97021 22 7.97021V12.9702" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M15.9965 11H16.0054" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
<path d="M11.9945 11H12.0035" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
<path d="M7.99451 11H8.00349" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default MessageSearchTwotoneIcon;
      