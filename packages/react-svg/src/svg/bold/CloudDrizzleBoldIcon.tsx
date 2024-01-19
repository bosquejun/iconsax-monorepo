
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const CloudDrizzleBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M20.17 17.5709C19.64 18.0609 19.03 18.4309 18.37 18.6809C17.71 18.9309 17 18.4509 17 17.7409V16.4209C17 14.4709 15.42 12.8909 13.47 12.8909H10.53C8.58 12.8909 7 14.4709 7 16.4209V18.0009C7 18.5509 6.55 19.0009 6 19.0009H5.55C3.1 18.6309 2 16.6409 2 14.8609C2 13.1809 2.98 11.3209 5.11 10.8009C4.52 8.47091 5.02 6.28091 6.54 4.69091C8.27 2.88091 11.03 2.16091 13.41 2.90091C15.6 3.57091 17.14 5.37091 17.69 7.87091C19.6 8.30091 21.13 9.74091 21.74 11.7409C22.4 13.9109 21.8 16.1409 20.17 17.5709Z" fill={color} />
<path d="M13.47 14.3906H10.53C9.26 14.3906 8.5 15.1506 8.5 16.4206V19.3606C8.5 20.6306 9.26 21.3906 10.53 21.3906H13.47C14.74 21.3906 15.5 20.6306 15.5 19.3606V16.4206C15.5 15.1506 14.74 14.3906 13.47 14.3906ZM11.71 18.8406L10.47 20.0706C10.38 20.1606 10.26 20.2106 10.15 20.2106C10.02 20.2106 9.91 20.1606 9.82 20.0706C9.64 19.8906 9.64 19.6006 9.82 19.4206L11.05 18.1806C11.24 18.0006 11.53 18.0006 11.71 18.1806C11.89 18.3606 11.89 18.6606 11.71 18.8406ZM11.71 16.3606L10.47 17.6006C10.38 17.6906 10.26 17.7406 10.15 17.7406C10.02 17.7406 9.91 17.6906 9.82 17.6006C9.64 17.4206 9.64 17.1206 9.82 16.9406L11.05 15.7106C11.24 15.5306 11.53 15.5306 11.71 15.7106C11.89 15.8906 11.89 16.1806 11.71 16.3606ZM14.18 18.8406L12.95 20.0706C12.85 20.1606 12.74 20.2106 12.62 20.2106C12.5 20.2106 12.38 20.1606 12.29 20.0706C12.11 19.8906 12.11 19.6006 12.29 19.4206L13.53 18.1806C13.71 18.0006 14 18.0006 14.18 18.1806C14.36 18.3606 14.36 18.6606 14.18 18.8406ZM14.18 16.3606L12.95 17.6006C12.85 17.6906 12.74 17.7406 12.62 17.7406C12.5 17.7406 12.38 17.6906 12.29 17.6006C12.11 17.4206 12.11 17.1206 12.29 16.9406L13.53 15.7106C13.71 15.5306 14 15.5306 14.18 15.7106C14.36 15.8906 14.36 16.1806 14.18 16.3606Z" fill={color} />
        </svg>
      )
    }
    
    
    export default CloudDrizzleBoldIcon;
      