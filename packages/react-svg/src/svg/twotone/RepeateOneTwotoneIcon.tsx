
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const RepeateOneTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M14.0002 3L16.4402 5.34003L8.49023 5.32001C4.92023 5.32001 1.99023 8.25003 1.99023 11.84C1.99023 13.63 2.72024 15.26 3.90024 16.44" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M10.0005 21.0001L7.56055 18.66L15.5106 18.6801C19.0806 18.6801 22.0106 15.75 22.0106 12.16C22.0106 10.37 21.2806 8.74006 20.1006 7.56006" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M12.25 14.67V9.33008L10.75 11.0001" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default RepeateOneTwotoneIcon;
      