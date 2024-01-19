
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const DocumentDownloadBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z" fill={color} />
<path d="M15.7997 2.20999C15.3897 1.79999 14.6797 2.07999 14.6797 2.64999V6.13999C14.6797 7.59999 15.9197 8.80999 17.4297 8.80999C18.3797 8.81999 19.6997 8.81999 20.8297 8.81999C21.3997 8.81999 21.6997 8.14999 21.2997 7.74999C19.8597 6.29999 17.2797 3.68999 15.7997 2.20999Z" fill={color} />
<path d="M12.2795 14.72C11.9895 14.43 11.5095 14.43 11.2195 14.72L10.4995 15.44V11.25C10.4995 10.84 10.1595 10.5 9.74945 10.5C9.33945 10.5 8.99945 10.84 8.99945 11.25V15.44L8.27945 14.72C7.98945 14.43 7.50945 14.43 7.21945 14.72C6.92945 15.01 6.92945 15.49 7.21945 15.78L9.21945 17.78C9.22945 17.79 9.23945 17.79 9.23945 17.8C9.29945 17.86 9.37945 17.91 9.45945 17.95C9.55945 17.98 9.64945 18 9.74945 18C9.84945 18 9.93945 17.98 10.0295 17.94C10.1195 17.9 10.1995 17.85 10.2795 17.78L12.2795 15.78C12.5695 15.49 12.5695 15.01 12.2795 14.72Z" fill={color} />
        </svg>
      )
    }
    
    
    export default DocumentDownloadBulkIcon;
      