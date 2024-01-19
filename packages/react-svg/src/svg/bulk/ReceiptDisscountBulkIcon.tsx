
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ReceiptDisscountBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M6.73 19.7C7.55 18.82 8.8 18.89 9.52 19.85L10.53 21.2C11.34 22.27 12.65 22.27 13.46 21.2L14.47 19.85C15.19 18.89 16.44 18.82 17.26 19.7C19.04 21.6 20.49 20.97 20.49 18.31V7.04C20.5 3.01 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3C3.5 20.97 4.96 21.59 6.73 19.7Z" fill={color} />
<path d="M15 14C14.44 14 14 13.55 14 13C14 12.45 14.45 12 15 12C15.55 12 16 12.45 16 13C16 13.55 15.56 14 15 14Z" fill={color} />
<path d="M9 9C8.44 9 8 8.55 8 8C8 7.45 8.45 7 9 7C9.55 7 10 7.45 10 8C10 8.55 9.56 9 9 9Z" fill={color} />
<path d="M8.63031 14.5498C8.44031 14.5498 8.25031 14.4798 8.10031 14.3298C7.81031 14.0398 7.81031 13.5598 8.10031 13.2698L14.8303 6.53977C15.1203 6.24977 15.6003 6.24977 15.8903 6.53977C16.1803 6.82977 16.1803 7.30977 15.8903 7.59977L9.16031 14.3298C9.02031 14.4798 8.82031 14.5498 8.63031 14.5498Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ReceiptDisscountBulkIcon;
      