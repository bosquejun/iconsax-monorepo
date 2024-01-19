
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const More2TwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M11.9998 9.32C13.1898 9.32 14.1598 8.35 14.1598 7.16C14.1598 5.97 13.1898 5 11.9998 5C10.8098 5 9.83984 5.97 9.83984 7.16C9.83984 8.35 10.8098 9.32 11.9998 9.32Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M6.78988 19.0002C7.97988 19.0002 8.94988 18.0302 8.94988 16.8402C8.94988 15.6502 7.97988 14.6802 6.78988 14.6802C5.59988 14.6802 4.62988 15.6502 4.62988 16.8402C4.62988 18.0302 5.58988 19.0002 6.78988 19.0002Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M17.2098 19.0002C18.3998 19.0002 19.3698 18.0302 19.3698 16.8402C19.3698 15.6502 18.3998 14.6802 17.2098 14.6802C16.0198 14.6802 15.0498 15.6502 15.0498 16.8402C15.0498 18.0302 16.0198 19.0002 17.2098 19.0002Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default More2TwotoneIcon;
      