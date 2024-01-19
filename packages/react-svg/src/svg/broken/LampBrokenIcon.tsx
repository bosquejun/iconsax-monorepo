
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const LampBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M10.9406 2H7.99056C7.03056 2 6.02056 2.77 5.77056 3.7L3.57056 11.77C3.13056 13.37 4.13056 14.68 5.80056 14.68H18.2206C19.8806 14.68 20.8806 13.37 20.4506 11.77L18.2506 3.7C17.9806 2.77 16.9706 2 16.0106 2" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12 15V22" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M8 22H16" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default LampBrokenIcon;
      