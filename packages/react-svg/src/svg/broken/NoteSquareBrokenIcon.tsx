
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const NoteSquareBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M2 13.01V15C2 20 4 22 9 22H11" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M22 10V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M15.5098 22C16.6143 22 17.5098 21.1046 17.5098 20C17.5098 18.8954 16.6143 18 15.5098 18C14.4052 18 13.5098 18.8954 13.5098 20C13.5098 21.1046 14.4052 22 15.5098 22Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M17.5098 19.9998V13.0098" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M18.8198 12.0699L21.0298 12.8099C21.5598 12.9899 21.9998 13.5899 21.9998 14.1599V14.7499C21.9998 15.5099 21.4098 15.9399 20.6898 15.6999L18.4797 14.9599C17.9497 14.7799 17.5098 14.1799 17.5098 13.6099V13.0199C17.5098 12.2499 18.0998 11.8299 18.8198 12.0699Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default NoteSquareBrokenIcon;
      