
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const SizeBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M21.9707 5.5V9.5C21.9707 11.2615 20.6712 12.7232 18.9692 12.9649C18.6958 13.0038 18.4707 12.7761 18.4707 12.5V12.25C18.4707 8.53 15.4507 5.5 11.7207 5.5H11.4707C11.1946 5.5 10.9669 5.27486 11.0061 5.0015C11.2488 3.30678 12.7099 2 14.4707 2H18.4707C20.4107 2 21.9707 3.57 21.9707 5.5Z" fill={color} />
<path d="M11.7207 7H10.9707H6.9707C4.2107 7 1.9707 9.24 1.9707 12V17C1.9707 19.76 4.2107 22 6.9707 22H11.9707C14.7307 22 16.9707 19.76 16.9707 17V13V12.25C16.9707 9.35 14.6207 7 11.7207 7Z" fill={color} />
        </svg>
      )
    }
    
    
    export default SizeBoldIcon;
      