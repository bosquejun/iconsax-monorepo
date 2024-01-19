
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Clock1TwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M12 9.66016V12.4502L13.4 13.8502" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M5.5 12C5.5 8.41 8.41 5.5 12 5.5C15.59 5.5 18.5 8.41 18.5 12C18.5 14.08 17.52 15.94 16 17.13H15.99C14.89 17.99 13.51 18.5 12 18.5C10.51 18.5 9.14 18 8.04 17.15H8.03C6.49 15.96 5.5 14.1 5.5 12Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M8.03027 17.1499H8.04027C9.14027 17.9999 10.5103 18.4999 12.0003 18.4999C13.5103 18.4999 14.8903 17.9899 15.9903 17.1299H16.0003L15.4903 19.5999C15.0003 21.4999 13.9003 21.9999 12.5503 21.9999H11.4603C10.1103 21.9999 9.00027 21.4999 8.52027 19.5899L8.03027 17.1499Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M8.03027 6.85H8.04027C9.14027 6 10.5103 5.5 12.0003 5.5C13.5103 5.5 14.8903 6.01 15.9903 6.87H16.0003L15.4903 4.4C15.0003 2.5 13.9003 2 12.5503 2H11.4603C10.1103 2 9.00027 2.5 8.52027 4.41L8.03027 6.85Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default Clock1TwotoneIcon;
      