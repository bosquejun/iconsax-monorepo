
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const AlignLeftLinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M5.1 19.25H16.9C18.4 19.25 19 18.61 19 17.02V15.98C19 14.39 18.4 13.75 16.9 13.75H5.1" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M5.1 5.25H11.9C13.4 5.25 14 5.89 14 7.48V8.52C14 10.11 13.4 10.75 11.9 10.75H5.1" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M5 1.98999V21.99" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default AlignLeftLinearIcon;
      