
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ArrowLeft3BulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M10.7702 8.52002L15.8202 12.31V17.92C15.8202 18.88 14.6602 19.36 13.9802 18.68L8.80023 13.51C7.97023 12.68 7.97023 11.33 8.80023 10.5L10.7702 8.52002Z" fill={color} />
<path d="M15.8195 6.07993V12.3099L10.7695 8.51993L13.9795 5.30993C14.6595 4.63993 15.8195 5.11993 15.8195 6.07993Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ArrowLeft3BulkIcon;
      