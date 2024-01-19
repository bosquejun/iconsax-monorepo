
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ClipboardExportBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M16.2391 3.6499H7.75906C5.28906 3.6499 3.28906 5.6599 3.28906 8.1199V17.5299C3.28906 19.9899 5.29906 21.9999 7.75906 21.9999H16.2291C18.6991 21.9999 20.6991 19.9899 20.6991 17.5299V8.1199C20.7091 5.6499 18.6991 3.6499 16.2391 3.6499Z" fill={color} />
<path d="M14.3498 2H9.64977C8.60977 2 7.75977 2.84 7.75977 3.88V4.82C7.75977 5.86 8.59977 6.7 9.63977 6.7H14.3498C15.3898 6.7 16.2298 5.86 16.2298 4.82V3.88C16.2398 2.84 15.3898 2 14.3498 2Z" fill={color} />
<path d="M15.53 16.47L10.81 11.75H12C12.41 11.75 12.75 11.41 12.75 11C12.75 10.59 12.41 10.25 12 10.25H9C8.59 10.25 8.25 10.59 8.25 11V14C8.25 14.41 8.59 14.75 9 14.75C9.41 14.75 9.75 14.41 9.75 14V12.81L14.47 17.53C14.62 17.68 14.81 17.75 15 17.75C15.19 17.75 15.38 17.68 15.53 17.53C15.82 17.24 15.82 16.76 15.53 16.47Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ClipboardExportBulkIcon;
      