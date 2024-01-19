
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ArrowCircleUpBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill={color} />
<path d="M15.5302 14.0099C15.3402 14.0099 15.1502 13.9399 15.0002 13.7899L12.0002 10.7899L9.00016 13.7899C8.71016 14.0799 8.23016 14.0799 7.94016 13.7899C7.65016 13.4999 7.65016 13.0199 7.94016 12.7299L11.4702 9.19992C11.7602 8.90992 12.2402 8.90992 12.5302 9.19992L16.0602 12.7299C16.3502 13.0199 16.3502 13.4999 16.0602 13.7899C15.9102 13.9399 15.7202 14.0099 15.5302 14.0099Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ArrowCircleUpBulkIcon;
      