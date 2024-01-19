
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const SimcardTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M19.54 6.53973L16.47 3.46973C15.53 2.52973 14.26 2.00977 12.93 2.00977H8C5 2.00977 3 4.00977 3 7.00977V17.0098C3 20.0098 5 22.0098 8 22.0098H16C19 22.0098 21 20.0098 21 17.0098V10.0798C21 8.73977 20.47 7.46973 19.54 6.53973Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default SimcardTwotoneIcon;
      