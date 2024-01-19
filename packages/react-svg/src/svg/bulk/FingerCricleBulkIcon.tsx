
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const FingerCricleBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill={color} />
<path d="M11.9996 9.87012C11.5096 9.87012 11.0996 10.2701 11.0996 10.7701V13.2401C11.0996 13.7401 11.4996 14.1401 11.9996 14.1401C12.4996 14.1401 12.8996 13.7401 12.8996 13.2401V10.7701C12.8996 10.2701 12.4896 9.87012 11.9996 9.87012Z" fill={color} />
<path d="M12 17.5499C9.38 17.5499 7.25 15.4199 7.25 12.7999V11.2C7.25 8.57995 9.38 6.44995 12 6.44995C14.62 6.44995 16.75 8.57995 16.75 11.2V12.7999C16.75 15.4199 14.62 17.5499 12 17.5499ZM12 7.94995C10.21 7.94995 8.75 9.40995 8.75 11.2V12.7999C8.75 14.5899 10.21 16.0499 12 16.0499C13.79 16.0499 15.25 14.5899 15.25 12.7999V11.2C15.25 9.40995 13.79 7.94995 12 7.94995Z" fill={color} />
        </svg>
      )
    }
    
    
    export default FingerCricleBulkIcon;
      