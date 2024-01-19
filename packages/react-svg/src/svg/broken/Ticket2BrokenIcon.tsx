
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Ticket2BrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M19.0291 14.97C19.0291 16.26 20.0891 17.31 21.3791 17.31C21.3791 21.06 20.4391 22 16.6891 22H7.30914C3.55914 22 2.61914 21.06 2.61914 17.31V16.85C3.90914 16.85 4.96914 15.79 4.96914 14.5C4.96914 13.21 3.90914 12.15 2.61914 12.15V11.69C2.62914 7.94 3.55914 7 7.30914 7H16.6791C20.4291 7 21.3691 7.94 21.3691 11.69V12.63" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M16.3302 7.00009H7.24023L10.1702 4.07009C12.5602 1.68009 13.7602 1.68009 16.1502 4.07009L16.7502 4.67009C16.1202 5.30009 15.9702 6.23009 16.3302 7.00009Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M10 7L10 22" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 5" />
        </svg>
      )
    }
    
    
    export default Ticket2BrokenIcon;
      