
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const SizeBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M21.9707 5.5V9.5C21.9707 11.43 20.4007 13 18.4707 13H16.9707V12.25C16.9707 9.35 14.6207 7 11.7207 7H10.9707V5.5C10.9707 3.57 12.5407 2 14.4707 2H18.4707C20.4107 2 21.9707 3.57 21.9707 5.5Z" fill={color} />
<path opacity="0.4" d="M11.7207 7H10.9707H6.9707C4.2107 7 1.9707 9.24 1.9707 12V17C1.9707 19.76 4.2107 22 6.9707 22H11.9707C14.7307 22 16.9707 19.76 16.9707 17V13V12.25C16.9707 9.35 14.6207 7 11.7207 7Z" fill={color} />
        </svg>
      )
    }
    
    
    export default SizeBulkIcon;
      