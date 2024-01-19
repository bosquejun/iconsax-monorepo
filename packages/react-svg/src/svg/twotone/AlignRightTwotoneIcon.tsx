
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const AlignRightTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M18.9 19.25H7.1C5.6 19.25 5 18.61 5 17.02V15.98C5 14.39 5.6 13.75 7.1 13.75H18.9" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M18.9 5.25H12.1C10.6 5.25 10 5.89 10 7.48V8.52C10 10.11 10.6 10.75 12.1 10.75H18.9" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M19 1.99023V21.9902" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default AlignRightTwotoneIcon;
      