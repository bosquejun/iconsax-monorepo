
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const HeartSlashLinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M6.10999 17.5C3.89999 15.43 2 12.48 2 8.67999C2 5.58999 4.49 3.09003 7.56 3.09003C9.38 3.09003 10.99 3.97002 12 5.33002C13.01 3.97002 14.63 3.09003 16.44 3.09003C17.59 3.09003 18.66 3.43999 19.55 4.04999" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M21.74 7C21.91 7.53 22 8.1 22 8.69C22 15.69 15.52 19.82 12.62 20.82C12.28 20.94 11.72 20.94 11.38 20.82C10.73 20.6 9.91002 20.22 9.02002 19.69" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M22 2L2 22" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default HeartSlashLinearIcon;
      