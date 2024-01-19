
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const NotificationBingBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12 6.43994V9.76994" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
<path d="M20.5894 15.17C21.3194 16.39 20.7394 17.97 19.3894 18.42C14.6094 20.01 9.43944 20.01 4.65944 18.42C3.21944 17.94 2.66944 16.48 3.45944 15.17L4.72944 13.05C5.07944 12.47 5.35944 11.44 5.35944 10.77V8.67C5.35944 4.98 8.33944 2 12.0194 2C15.6794 2 18.6794 5 18.6794 8.66V10.76C18.6794 10.94 18.6994 11.14 18.7294 11.35" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
<path d="M15.3299 18.8201C15.3299 20.6501 13.8299 22.1501 11.9999 22.1501C11.0899 22.1501 10.2499 21.7701 9.64992 21.1701C9.04992 20.5701 8.66992 19.7301 8.66992 18.8201" stroke={color} stroke-width="1.5" stroke-miterlimit="10" />
        </svg>
      )
    }
    
    
    export default NotificationBingBrokenIcon;
      