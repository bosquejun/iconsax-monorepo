
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const DocumentFavoriteBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M9.41978 18.2001C8.91978 18.2001 7.14978 17.3701 6.61978 15.7201C6.28978 14.6901 6.67978 13.4201 7.74978 13.0701C8.31978 12.8901 9.01978 13.0401 9.40978 13.5901C9.77978 13.0201 10.5098 12.8901 11.0698 13.0701C12.1498 13.4201 12.5298 14.6901 12.2098 15.7201" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2 9C2 4 4 2 9 2H14" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V12.98" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M18 10C15 10 14 9 14 6V2L22 10" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default DocumentFavoriteBrokenIcon;
      