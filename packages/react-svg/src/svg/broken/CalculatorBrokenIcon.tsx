
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const CalculatorBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M3 12.97V15C3 20 5 22 10 22H14C19 22 21 20 21 15V9C21 4 19 2 14 2H10C5 2 3 4 3 9" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M16.5 7.58008V8.58008C16.5 9.40008 15.83 10.0801 15 10.0801H9C8.18 10.0801 7.5 9.41008 7.5 8.58008V7.58008C7.5 6.76008 8.17 6.08008 9 6.08008H15C15.83 6.08008 16.5 6.75008 16.5 7.58008Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M8.13612 14H8.14767" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
<path d="M11.9955 14H12.007" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
<path d="M15.8549 14H15.8664" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
<path d="M8.13612 17.5H8.14767" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
<path d="M11.9955 17.5H12.007" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
<path d="M15.8549 17.5H15.8664" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default CalculatorBrokenIcon;
      