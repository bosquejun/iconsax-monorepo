
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const HeartEditBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M16.44 3.1001C14.63 3.1001 13.01 3.98008 12 5.33008C10.99 3.98008 9.37 3.1001 7.56 3.1001C4.49 3.1001 2 5.60009 2 8.69009C2 9.88009 2.19 10.9801 2.52 12.0001C4.1 17.0001 8.97 19.9901 11.38 20.8101C11.72 20.9301 12.28 20.9301 12.62 20.8101C15.03 19.9901 19.9 17.0001 21.48 12.0001C21.81 10.9801 22 9.88009 22 8.69009C22 5.60009 19.51 3.1001 16.44 3.1001Z" fill={color} />
<path d="M14.8392 9.16C13.9392 8.26 13.2292 8.55 12.6192 9.16L9.07921 12.7C8.93921 12.84 8.80921 13.1 8.77921 13.29L8.58921 14.64C8.51921 15.13 8.85921 15.47 9.34921 15.4L10.6992 15.21C10.8892 15.18 11.1592 15.05 11.2892 14.91L14.8292 11.37C15.4492 10.77 15.7392 10.06 14.8392 9.16Z" fill={color} />
        </svg>
      )
    }
    
    
    export default HeartEditBulkIcon;
      