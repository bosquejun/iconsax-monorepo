
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const DocumentCloudLinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M14 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M22 10V13" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M22 10H18C15 10 14 9 14 6V2L22 10Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M13.7601 18.2601C11.4101 18.4301 11.4101 21.8301 13.7601 22.0001H19.3201C19.9901 22.0001 20.6501 21.7501 21.1401 21.3001C22.7901 19.8601 21.9101 16.9801 19.7401 16.7101C18.9601 12.0201 12.1801 13.8001 13.7801 18.2701" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default DocumentCloudLinearIcon;
      