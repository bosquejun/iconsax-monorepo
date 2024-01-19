
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const DirectInboxLinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12 2V9L14 7" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12 9L10 7" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M1.97998 13H6.38998C6.76998 13 7.10998 13.21 7.27998 13.55L8.44998 15.89C8.78998 16.57 9.47998 17 10.24 17H13.77C14.53 17 15.22 16.57 15.56 15.89L16.73 13.55C16.9 13.21 17.25 13 17.62 13H21.98" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M7 4.12988C3.46 4.64988 2 6.72988 2 10.9999V14.9999C2 19.9999 4 21.9999 9 21.9999H15C20 21.9999 22 19.9999 22 14.9999V10.9999C22 6.72988 20.54 4.64988 17 4.12988" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default DirectInboxLinearIcon;
      