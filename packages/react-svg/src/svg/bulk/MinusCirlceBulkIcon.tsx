
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MinusCirlceBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill={color} />
<path d="M15.9199 12.75H7.91992C7.50992 12.75 7.16992 12.41 7.16992 12C7.16992 11.59 7.50992 11.25 7.91992 11.25H15.9199C16.3299 11.25 16.6699 11.59 16.6699 12C16.6699 12.41 16.3399 12.75 15.9199 12.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default MinusCirlceBulkIcon;
      