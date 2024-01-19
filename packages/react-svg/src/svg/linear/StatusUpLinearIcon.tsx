
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const StatusUpLinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M6.87988 18.1501V16.0801" stroke={color} stroke-width="1.5" stroke-linecap="round" />
<path d="M12 18.15V14.01" stroke={color} stroke-width="1.5" stroke-linecap="round" />
<path d="M17.1201 18.1499V11.9299" stroke={color} stroke-width="1.5" stroke-linecap="round" />
<path d="M17.1199 5.8501L16.6599 6.3901C14.1099 9.3701 10.6899 11.4801 6.87988 12.4301" stroke={color} stroke-width="1.5" stroke-linecap="round" />
<path d="M14.1899 5.8501H17.1199V8.7701" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default StatusUpLinearIcon;
      