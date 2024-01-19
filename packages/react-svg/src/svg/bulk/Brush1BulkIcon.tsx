
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Brush1BulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M6 2H18C19.1 2 20 2.9 20 4V8.32001H4V4C4 2.9 4.9 2 6 2Z" fill={color} />
<path opacity="0.4" d="M4 8.31982V11.8798C4 12.9598 4.58003 13.9598 5.53003 14.4898L8.48999 16.1598C9.11999 16.5098 9.51001 17.1798 9.51001 17.8998V19.9998C9.51001 21.0998 10.41 21.9998 11.51 21.9998H12.51C13.61 21.9998 14.51 21.0998 14.51 19.9998V17.8998C14.51 17.1798 14.9 16.5098 15.53 16.1598L18.49 14.4898C19.43 13.9598 20.02 12.9598 20.02 11.8798V8.31982H4Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Brush1BulkIcon;
      