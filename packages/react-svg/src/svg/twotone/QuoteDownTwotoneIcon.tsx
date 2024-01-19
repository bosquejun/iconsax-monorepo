
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const QuoteDownTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M21.9991 11.65H16.1991C14.6691 11.65 13.6191 10.49 13.6191 9.07001V5.84998C13.6191 4.42998 14.6691 3.27002 16.1991 3.27002H19.4191C20.8391 3.27002 21.9991 4.42998 21.9991 5.84998V11.65Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M21.9988 11.6499C21.9988 17.6999 20.8688 18.6998 17.4688 20.7198" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default QuoteDownTwotoneIcon;
      