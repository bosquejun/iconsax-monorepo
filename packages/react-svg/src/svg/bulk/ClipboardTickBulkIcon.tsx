
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ClipboardTickBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M16.2391 3.6499H7.75906C5.28906 3.6499 3.28906 5.6599 3.28906 8.1199V17.5299C3.28906 19.9899 5.29906 21.9999 7.75906 21.9999H16.2291C18.6991 21.9999 20.6991 19.9899 20.6991 17.5299V8.1199C20.7091 5.6499 18.6991 3.6499 16.2391 3.6499Z" fill={color} />
<path d="M14.3498 2H9.64977C8.60977 2 7.75977 2.84 7.75977 3.88V4.82C7.75977 5.86 8.59977 6.7 9.63977 6.7H14.3498C15.3898 6.7 16.2298 5.86 16.2298 4.82V3.88C16.2398 2.84 15.3898 2 14.3498 2Z" fill={color} />
<path d="M10.81 16.9501C10.62 16.9501 10.43 16.8801 10.28 16.7301L8.78 15.2301C8.49 14.9401 8.49 14.4601 8.78 14.1701C9.07 13.8801 9.55 13.8801 9.84 14.1701L10.81 15.1401L14.28 11.6701C14.57 11.3801 15.05 11.3801 15.34 11.6701C15.63 11.9601 15.63 12.4401 15.34 12.7301L11.34 16.7301C11.2 16.8801 11 16.9501 10.81 16.9501Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ClipboardTickBulkIcon;
      