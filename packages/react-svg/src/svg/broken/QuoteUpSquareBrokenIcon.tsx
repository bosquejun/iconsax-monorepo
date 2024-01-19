
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const QuoteUpSquareBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M2 12.83V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M17.0009 11.84H14.3209C13.6109 11.84 13.1309 11.3 13.1309 10.65V9.15997C13.1309 8.50997 13.6109 7.96997 14.3209 7.96997H15.8109C16.4609 7.96997 17.0009 8.50997 17.0009 9.15997V11.84Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M17.0002 11.8401C17.0002 14.6301 16.4802 15.1001 14.9102 16.0301" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M10.8602 11.84H8.18023C7.47023 11.84 6.99023 11.3 6.99023 10.65V9.15997C6.99023 8.50997 7.47023 7.96997 8.18023 7.96997H9.67023C10.3202 7.96997 10.8602 8.50997 10.8602 9.15997V11.84Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M10.8595 11.8401C10.8595 14.6301 10.3395 15.1001 8.76953 16.0301" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default QuoteUpSquareBrokenIcon;
      