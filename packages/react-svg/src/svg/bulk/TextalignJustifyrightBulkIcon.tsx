
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const TextalignJustifyrightBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M21 5.25H3C2.59 5.25 2.25 4.91 2.25 4.5C2.25 4.09 2.59 3.75 3 3.75H21C21.41 3.75 21.75 4.09 21.75 4.5C21.75 4.91 21.41 5.25 21 5.25Z" fill={color} />
<path opacity="0.4" d="M20.9993 10.25H11.5293C11.1193 10.25 10.7793 9.91 10.7793 9.5C10.7793 9.09 11.1193 8.75 11.5293 8.75H20.9993C21.4093 8.75 21.7493 9.09 21.7493 9.5C21.7493 9.91 21.4093 10.25 20.9993 10.25Z" fill={color} />
<path d="M21 15.25H3C2.59 15.25 2.25 14.91 2.25 14.5C2.25 14.09 2.59 13.75 3 13.75H21C21.41 13.75 21.75 14.09 21.75 14.5C21.75 14.91 21.41 15.25 21 15.25Z" fill={color} />
<path opacity="0.4" d="M20.9993 20.25H11.5293C11.1193 20.25 10.7793 19.91 10.7793 19.5C10.7793 19.09 11.1193 18.75 11.5293 18.75H20.9993C21.4093 18.75 21.7493 19.09 21.7493 19.5C21.7493 19.91 21.4093 20.25 20.9993 20.25Z" fill={color} />
        </svg>
      )
    }
    
    
    export default TextalignJustifyrightBulkIcon;
      