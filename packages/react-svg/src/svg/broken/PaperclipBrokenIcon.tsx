
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const PaperclipBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M4.9707 14V16C4.9707 19.31 7.6607 22 10.9707 22" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M11.9707 12V15.5C11.9707 17.43 13.5407 19 15.4707 19C17.4007 19 18.9707 17.43 18.9707 15.5V10C18.9707 6.13 15.8407 3 11.9707 3C8.1007 3 4.9707 6.13 4.9707 10" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default PaperclipBrokenIcon;
      