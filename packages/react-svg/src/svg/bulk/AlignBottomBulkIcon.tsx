
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const AlignBottomBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M15.98 19.3799H17.02C18.61 19.3799 19.25 18.7799 19.25 17.2599V5.37988H13.75V17.2599C13.76 18.7799 14.4 19.3799 15.98 19.3799Z" fill={color} />
<path opacity="0.4" d="M7.48 14.3799H8.52C10.11 14.3799 10.75 13.7699 10.75 12.2599V5.37988H5.25V12.2599C5.26 13.7699 5.9 14.3799 7.48 14.3799Z" fill={color} />
<path d="M21.25 6.11988H2.75C2.34 6.11988 2 5.78988 2 5.37988C2 4.96988 2.34 4.62988 2.75 4.62988H21.25C21.66 4.62988 22 4.96988 22 5.37988C22 5.78988 21.66 6.11988 21.25 6.11988Z" fill={color} />
        </svg>
      )
    }
    
    
    export default AlignBottomBulkIcon;
      