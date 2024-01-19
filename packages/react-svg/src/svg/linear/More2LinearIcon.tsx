
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const More2LinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12.0001 9.32C13.1901 9.32 14.1601 8.35 14.1601 7.16C14.1601 5.97 13.1901 5 12.0001 5C10.8101 5 9.84009 5.97 9.84009 7.16C9.84009 8.35 10.8101 9.32 12.0001 9.32Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M6.78988 18.9999C7.97988 18.9999 8.94988 18.0299 8.94988 16.8399C8.94988 15.6499 7.97988 14.6799 6.78988 14.6799C5.59988 14.6799 4.62988 15.6499 4.62988 16.8399C4.62988 18.0299 5.58988 18.9999 6.78988 18.9999Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M17.21 18.9999C18.4 18.9999 19.37 18.0299 19.37 16.8399C19.37 15.6499 18.4 14.6799 17.21 14.6799C16.02 14.6799 15.05 15.6499 15.05 16.8399C15.05 18.0299 16.02 18.9999 17.21 18.9999Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default More2LinearIcon;
      