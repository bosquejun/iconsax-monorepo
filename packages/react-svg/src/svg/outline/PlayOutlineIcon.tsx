
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const PlayOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M7.87 21.28C7.08 21.28 6.33 21.09 5.67 20.71C4.11 19.81 3.25 17.98 3.25 15.57V8.43999C3.25 6.01999 4.11 4.19999 5.67 3.29999C7.23 2.39999 9.24 2.56999 11.34 3.77999L17.51 7.33999C19.6 8.54999 20.76 10.21 20.76 12.01C20.76 13.81 19.61 15.47 17.51 16.68L11.34 20.24C10.13 20.93 8.95 21.28 7.87 21.28ZM7.87 4.21999C7.33 4.21999 6.85 4.33999 6.42 4.58999C5.34 5.20999 4.75 6.57999 4.75 8.43999V15.56C4.75 17.42 5.34 18.78 6.42 19.41C7.5 20.04 8.98 19.86 10.59 18.93L16.76 15.37C18.37 14.44 19.26 13.25 19.26 12C19.26 10.75 18.37 9.55999 16.76 8.62999L10.59 5.06999C9.61 4.50999 8.69 4.21999 7.87 4.21999Z" fill={color} />
        </svg>
      )
    }
    
    
    export default PlayOutlineIcon;
      