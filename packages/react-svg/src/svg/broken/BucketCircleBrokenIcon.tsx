
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const BucketCircleBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M9.40994 15.9499L7.01992 13.56C6.21992 12.76 6.21992 11.9599 7.01992 11.1699L11.0099 7.17993L15.3999 11.5699C15.6199 11.7899 15.6199 12.1499 15.3999 12.3699L11.8099 15.9599C11.0099 16.7499 10.2099 16.7499 9.40994 15.9499Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M10.209 6.37988L11.009 7.17987" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M6.45898 12.3299L15.489 11.9399" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M16.4691 14.1699C16.4691 14.1699 15.3691 15.3699 15.3691 16.0999C15.3691 16.7099 15.8691 17.1998 16.4691 17.1998C17.0791 17.1998 17.5692 16.6999 17.5692 16.0999C17.5792 15.3599 16.4691 14.1699 16.4691 14.1699Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.29998 7.97 2.84998" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default BucketCircleBrokenIcon;
      