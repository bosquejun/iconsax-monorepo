
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const CloudNotifTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M21.8995 13.9602C22.1695 15.6302 21.6995 17.4202 20.2695 18.6802C19.2795 19.5902 17.9795 20.0902 16.6295 20.0802H5.53945C0.869454 19.7402 0.859454 12.9402 5.53945 12.6002H5.58945C3.39945 6.47023 9.08945 2.87022 13.3795 4.25022" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M7.25984 13.0101C6.73984 12.7501 6.16984 12.6101 5.58984 12.6001" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M21.9707 8.5C21.9707 9.6 21.4607 10.59 20.6507 11.23C20.0607 11.71 19.2907 12 18.4707 12C16.5407 12 14.9707 10.43 14.9707 8.5C14.9707 7.54 15.3607 6.67 16.0007 6.04V6.03C16.6307 5.39 17.5107 5 18.4707 5C20.4007 5 21.9707 6.57 21.9707 8.5Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default CloudNotifTwotoneIcon;
      