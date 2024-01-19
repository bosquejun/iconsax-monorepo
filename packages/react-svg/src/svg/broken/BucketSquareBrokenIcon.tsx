
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const BucketSquareBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M8.93931 16.9301L6.1093 14.1C5.1693 13.16 5.1693 12.2101 6.1093 11.2701L10.8293 6.55005L16.0193 11.7401C16.2793 12.0001 16.2793 12.4201 16.0193 12.6801L11.7693 16.9301C10.8293 17.8701 9.87931 17.8701 8.93931 16.9301Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M9.87891 5.6001L10.8289 6.5401" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M5.43945 12.6401L16.1295 12.1702" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M17.3002 14.8101C17.3002 14.8101 15.9902 16.23 15.9902 17.1C15.9902 17.82 16.5802 18.41 17.3002 18.41C18.0202 18.41 18.6102 17.82 18.6102 17.1C18.6002 16.23 17.3002 14.8101 17.3002 14.8101Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2 12.97V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default BucketSquareBrokenIcon;
      