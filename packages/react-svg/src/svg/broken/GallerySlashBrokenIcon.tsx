
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const GallerySlashBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M2 9C2 4 4 2 9 2H15C17.19 2 18.8 2.38 19.92 3.23" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M3.37 20.1C2.43 18.97 2 17.31 2 15V12.97" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M21.9709 7.98999C21.9909 8.30999 22.0009 8.64999 22.0009 8.99999V15C22.0009 20 20.0009 22 15.0009 22H9.00094C8.26094 22 7.58094 21.96 6.96094 21.86" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M8 6C6.9 6 6 6.9 6 8C6 9.1 6.9 10 8 10C9.1 10 10 9.1 10 8" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M22 2L2 22" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M11.4297 16.45C11.7297 16.75 12.2197 16.75 12.5197 16.45L17.5497 11.41C18.3297 10.63 19.5897 10.63 20.3697 11.41L21.9997 13.05" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default GallerySlashBrokenIcon;
      