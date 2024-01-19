
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const StatusUpTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M6.87988 18.1501V16.0801" stroke={color} stroke-width="1.5" stroke-linecap="round" />
<path opacity="0.4" d="M12 18.1498V14.0098" stroke={color} stroke-width="1.5" stroke-linecap="round" />
<path opacity="0.4" d="M17.1201 18.1502V11.9302" stroke={color} stroke-width="1.5" stroke-linecap="round" />
<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default StatusUpTwotoneIcon;
      