
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const RepeateOneBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M8.5 5.32007C4.93 5.32007 2 8.25009 2 11.8401C2 13.6301 2.73 15.2601 3.91 16.4401" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M13.9997 3L16.4397 5.34003L12.9297 5.33002" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M10.0005 21.0001L7.56055 18.66L15.5106 18.6801C19.0806 18.6801 22.0106 15.75 22.0106 12.16C22.0106 10.37 21.2806 8.74006 20.1006 7.56006" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12.25 14.67V9.33008L10.75 11.0001" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default RepeateOneBrokenIcon;
      