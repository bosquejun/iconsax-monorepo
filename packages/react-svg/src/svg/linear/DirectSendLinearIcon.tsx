
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const DirectSendLinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12 9V2L10 4" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12 2L14 4" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M1.97998 13H6.38998C6.76998 13 7.10998 13.21 7.27998 13.55L8.44998 15.89C8.78998 16.57 9.47998 17 10.24 17H13.77C14.53 17 15.22 16.57 15.56 15.89L16.73 13.55C16.9 13.21 17.25 13 17.62 13H21.98" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M7 5.12988C3.46 5.64988 2 7.72988 2 11.9999V14.9999C2 19.9999 4 21.9999 9 21.9999H15C20 21.9999 22 19.9999 22 14.9999V11.9999C22 7.72988 20.54 5.64988 17 5.12988" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default DirectSendLinearIcon;
      