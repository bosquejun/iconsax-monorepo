
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const FolderOpenBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M21.3707 18.02L21.2707 19.3C21.1207 20.83 21.0007 22 18.2907 22H5.71074C3.00074 22 2.88074 20.83 2.73074 19.3L2.33074 14.3C2.25074 13.47 2.51074 12.7 2.98074 12.11C2.99074 12.1 2.99074 12.1 3.00074 12.09C3.55074 11.42 4.38074 11 5.31074 11H18.6907C19.6207 11 20.4407 11.42 20.9807 12.07C20.9907 12.08 21.0007 12.09 21.0007 12.1C21.4907 12.69 21.7607 13.46 21.6707 14.3" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M3.5 11.43V6.28003C3.5 2.88003 4.35 2.03003 7.75 2.03003H9.02C10.29 2.03003 10.58 2.41003 11.06 3.05003L12.33 4.75003C12.65 5.17003 12.84 5.43003 13.69 5.43003H16.24C19.64 5.43003 20.49 6.28003 20.49 9.68003V11.47" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M9.42969 17H14.5697" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default FolderOpenBrokenIcon;
      