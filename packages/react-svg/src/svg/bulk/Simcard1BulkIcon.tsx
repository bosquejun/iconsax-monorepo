
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Simcard1BulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M19.54 6.54L16.47 3.47C15.53 2.53 14.26 2 12.93 2H8C5 2 3 4 3 7V17C3 20 5 22 8 22H16C19 22 21 20 21 17V10.07C21 8.74 20.47 7.47 19.54 6.54Z" fill={color} />
<path d="M11.5 13.25V9.5H10C8.35 9.5 7 10.85 7 12.5V13.5H11.25C11.39 13.5 11.5 13.39 11.5 13.25Z" fill={color} />
<path d="M12.75 13.5H17V12.5C17 10.85 15.65 9.5 14 9.5H12.5V13.25C12.5 13.39 12.61 13.5 12.75 13.5Z" fill={color} />
<path d="M11.25 14.5H7V15.5C7 17.15 8.35 18.5 10 18.5H11.5V14.75C11.5 14.61 11.39 14.5 11.25 14.5Z" fill={color} />
<path d="M12.5 14.75V18.5H14C15.65 18.5 17 17.15 17 15.5V14.5H12.75C12.61 14.5 12.5 14.61 12.5 14.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Simcard1BulkIcon;
      