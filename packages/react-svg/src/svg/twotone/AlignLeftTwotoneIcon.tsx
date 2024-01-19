
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const AlignLeftTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M5.09961 19.25H16.8996C18.3996 19.25 18.9996 18.61 18.9996 17.02V15.98C18.9996 14.39 18.3996 13.75 16.8996 13.75H5.09961" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M5.09961 5.25H11.8996C13.3996 5.25 13.9996 5.89 13.9996 7.48V8.52C13.9996 10.11 13.3996 10.75 11.8996 10.75H5.09961" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M5 1.99023V21.9902" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default AlignLeftTwotoneIcon;
      