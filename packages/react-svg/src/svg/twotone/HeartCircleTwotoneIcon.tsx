
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const HeartCircleTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M12.3296 17.4501C12.1496 17.5101 11.8396 17.5101 11.6596 17.4501C10.0996 16.9201 6.59961 14.6901 6.59961 10.9101C6.59961 9.24013 7.93961 7.89014 9.59961 7.89014C10.5796 7.89014 11.4496 8.36013 11.9996 9.10013C12.5396 8.37013 13.4196 7.89014 14.3996 7.89014C16.0596 7.89014 17.3996 9.24013 17.3996 10.9101C17.3996 14.6901 13.8996 16.9201 12.3296 17.4501Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default HeartCircleTwotoneIcon;
      