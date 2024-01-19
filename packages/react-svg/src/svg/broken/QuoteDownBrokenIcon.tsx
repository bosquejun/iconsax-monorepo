
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const QuoteDownBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 47 46" fill={color} {...otherProps} >
          <path d="M12.63 3.85992C12.63 2.43992 13.68 1.27997 15.21 1.27997L18.42 1.27997C19.84 1.27997 21 2.43992 21 3.85992L21 9.65991" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M21 9.6499L15.2 9.6499C14.24 9.6499 13.48 9.19989 13.04 8.50989" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M21 9.65002C21 15.7 19.87 16.7 16.47 18.72" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M9.37086 9.6499L3.57086 9.6499C2.04086 9.6499 0.990859 8.48988 0.990859 7.06988L0.99086 3.84985C0.99086 2.42985 2.04086 1.2699 3.57086 1.2699L6.80086 1.2699C8.22086 1.2699 9.38086 2.42985 9.38086 3.84985L9.38086 9.6499" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M9.37109 9.65002C9.37109 15.7 8.24109 16.7 4.84109 18.72" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default QuoteDownBrokenIcon;
      