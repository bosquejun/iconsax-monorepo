
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const FolderConnectionTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M12 16V19" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12 23C13.1046 23 14 22.1046 14 21C14 19.8954 13.1046 19 12 19C10.8954 19 10 19.8954 10 21C10 22.1046 10.8954 23 12 23Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M18 21H14" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M10 21H6" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M19 8.30005V12.5C19 15.3 18.3 16 15.5 16H8.5C5.7 16 5 15.3 5 12.5V5.5C5 2.7 5.7 2 8.5 2H9.54999C10.6 2 10.83 2.30997 11.23 2.83997L12.28 4.23999C12.55 4.58999 12.7 4.80005 13.4 4.80005H15.5C18.3 4.80005 19 5.50005 19 8.30005Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" />
        </svg>
      )
    }
    
    
    export default FolderConnectionTwotoneIcon;
      