
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const LikeDislikeTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M4.91992 20.2799L6.68993 21.6499C6.91993 21.8799 7.42992 21.9898 7.77992 21.9898H9.94992C10.6399 21.9898 11.3799 21.4799 11.5499 20.7899L12.9199 16.6198C13.2099 15.8198 12.6899 15.1299 11.8299 15.1299H9.53992C9.19992 15.1299 8.90992 14.8398 8.96992 14.4398L9.25993 12.6098C9.36993 12.0998 9.02992 11.5198 8.51992 11.3498C8.05992 11.1798 7.48993 11.4099 7.25993 11.7499L4.91992 15.2398" stroke={color} stroke-width="1.5" stroke-miterlimit="10" />
<path d="M2 20.2799V14.6799C2 13.8799 2.34 13.5898 3.14 13.5898H3.71C4.51 13.5898 4.85 13.8799 4.85 14.6799V20.2799C4.85 21.0799 4.51 21.3699 3.71 21.3699H3.14C2.34 21.3699 2 21.0899 2 20.2799Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default LikeDislikeTwotoneIcon;
      