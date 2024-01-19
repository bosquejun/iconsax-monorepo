
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const DangerBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12 9V14" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M20.2394 14L21.2994 15.9C22.9794 18.93 21.5194 21.41 18.0594 21.41H11.9994H5.93944C2.46944 21.41 1.01944 18.93 2.69944 15.9L5.81944 10.28L8.75944 5.00003C10.5394 1.79003 13.4594 1.79003 15.2394 5.00003L18.1794 10.29" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M11.9941 17H12.0031" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default DangerBrokenIcon;
      