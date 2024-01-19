
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const CloudChangeTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M8.11028 11.8498C5.29028 12.0498 5.30028 16.1498 8.11028 16.3498H14.7803C15.5903 16.3598 16.3703 16.0498 16.9703 15.5098C18.9503 13.7798 17.8903 10.3098 15.2903 9.97976C14.3603 4.33976 6.2103 6.47976 8.1403 11.8498" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default CloudChangeTwotoneIcon;
      