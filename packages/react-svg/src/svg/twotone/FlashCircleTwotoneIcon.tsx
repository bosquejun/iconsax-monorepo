
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const FlashCircleTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M8.67938 11.9098L10.3294 12.3198L9.37939 16.1599C9.15939 17.0599 9.59937 17.3598 10.3594 16.8298L15.5394 13.2398C16.1694 12.7998 16.0794 12.2898 15.3294 12.0998L13.6794 11.6898L14.6294 7.84981C14.8494 6.94981 14.4094 6.64983 13.6494 7.17983L8.46939 10.7699C7.83939 11.2099 7.92938 11.7198 8.67938 11.9098Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default FlashCircleTwotoneIcon;
      