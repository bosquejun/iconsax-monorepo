
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const BucketCircle1LinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M9.41 15.9499L7.01998 13.56C6.21998 12.76 6.21998 11.9599 7.01998 11.1699L11.01 7.17993L15.4 11.5699C15.62 11.7899 15.62 12.1499 15.4 12.3699L11.81 15.9599C11.01 16.7499 10.21 16.7499 9.41 15.9499Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M10.21 6.37988L11.01 7.17987" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M6.45999 12.3299L15.49 11.9399" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M16.47 14.1699C16.47 14.1699 15.37 15.3699 15.37 16.0999C15.37 16.7099 15.87 17.1998 16.47 17.1998C17.08 17.1998 17.57 16.6999 17.57 16.0999C17.58 15.3599 16.47 14.1699 16.47 14.1699Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default BucketCircle1LinearIcon;
      