
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ForwardBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M2 8.33983V15.6598C2 17.1598 3.62999 18.0998 4.92999 17.3498L8.10001 15.5198L11.27 13.6898L11.76 13.4098V10.5898L11.27 10.3098L8.10001 8.47984L4.92999 6.64983C3.62999 5.89983 2 6.83983 2 8.33983Z" fill={color} />
<path d="M11.7598 8.33983V15.6598C11.7598 17.1598 13.3897 18.0998 14.6797 17.3498L17.8597 15.5198L21.0298 13.6898C22.3198 12.9398 22.3198 11.0598 21.0298 10.3098L17.8597 8.47984L14.6797 6.64983C13.3897 5.89983 11.7598 6.83983 11.7598 8.33983Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ForwardBulkIcon;
      