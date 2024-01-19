
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Send1TwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M9.50929 4.23013L18.0693 8.51013C21.9093 10.4301 21.9093 13.5701 18.0693 15.4901L9.50929 19.7701C3.74929 22.6501 1.39929 20.2901 4.27929 14.5401L5.14929 12.8101C5.36929 12.3701 5.36929 11.6401 5.14929 11.2001L4.27929 9.46013C1.39929 3.71013 3.75929 1.35013 9.50929 4.23013Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.34" d="M5.43945 12H10.8395" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default Send1TwotoneIcon;
      