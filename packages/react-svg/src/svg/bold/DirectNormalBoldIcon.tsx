
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const DirectNormalBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M21.3 12.2305H17.82C16.84 12.2305 15.97 12.7705 15.53 13.6505L14.69 15.3105C14.49 15.7105 14.09 15.9605 13.65 15.9605H10.37C10.06 15.9605 9.62 15.8905 9.33 15.3105L8.49 13.6605C8.05 12.7905 7.17 12.2405 6.2 12.2405H2.7C2.31 12.2405 2 12.5505 2 12.9405V16.2005C2 19.8305 4.18 22.0005 7.82 22.0005H16.2C19.63 22.0005 21.74 20.1205 22 16.7805V12.9305C22 12.5505 21.69 12.2305 21.3 12.2305Z" fill={color} />
<path d="M22 7.81V10.85C21.78 10.77 21.54 10.73 21.3 10.73H17.82C16.27 10.73 14.88 11.59 14.19 12.97L13.44 14.45H10.58L9.83 12.98C9.14 11.59 7.75 10.73 6.2 10.73H2.7C2.46 10.73 2.22 10.77 2 10.85V7.81C2 4.17 4.17 2 7.81 2H16.19C19.83 2 22 4.17 22 7.81Z" fill={color} />
        </svg>
      )
    }
    
    
    export default DirectNormalBoldIcon;
      