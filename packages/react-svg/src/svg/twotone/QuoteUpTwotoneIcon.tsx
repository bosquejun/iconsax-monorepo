
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const QuoteUpTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M13.6309 12.3501H19.4308C20.9608 12.3501 22.0109 13.5101 22.0109 14.9301V18.1501C22.0109 19.5701 20.9608 20.7301 19.4308 20.7301H16.2109C14.7909 20.7301 13.6309 19.5701 13.6309 18.1501V12.3501" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M13.6309 12.3502C13.6309 6.30022 14.7608 5.30027 18.1608 3.28027" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default QuoteUpTwotoneIcon;
      