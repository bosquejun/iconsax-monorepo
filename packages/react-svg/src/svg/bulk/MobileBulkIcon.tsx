
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MobileBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M16.24 2H7.76C5 2 4 3 4 5.81V18.19C4 21 5 22 7.76 22H16.23C19 22 20 21 20 18.19V5.81C20 3 19 2 16.24 2Z" fill={color} />
<path d="M14 6.25H10C9.59 6.25 9.25 5.91 9.25 5.5C9.25 5.09 9.59 4.75 10 4.75H14C14.41 4.75 14.75 5.09 14.75 5.5C14.75 5.91 14.41 6.25 14 6.25Z" fill={color} />
<path d="M12 19.3C12.9665 19.3 13.75 18.5165 13.75 17.55C13.75 16.5835 12.9665 15.8 12 15.8C11.0335 15.8 10.25 16.5835 10.25 17.55C10.25 18.5165 11.0335 19.3 12 19.3Z" fill={color} />
        </svg>
      )
    }
    
    
    export default MobileBulkIcon;
      