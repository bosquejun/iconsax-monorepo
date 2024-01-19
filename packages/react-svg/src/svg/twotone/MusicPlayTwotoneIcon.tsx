
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MusicPlayTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M5.4796 18.4898V15.5698C5.4796 14.5998 6.2396 13.7298 7.3196 13.7298C8.2896 13.7298 9.15959 14.4898 9.15959 15.5698V18.3798C9.15959 20.3298 7.53959 21.9498 5.58959 21.9498C3.63959 21.9498 2.01958 20.3198 2.01958 18.3798V12.2198C1.90958 6.59979 6.34959 2.0498 11.9696 2.0498C17.5896 2.0498 22.0196 6.5998 22.0196 12.1098V18.2698C22.0196 20.2198 20.3996 21.8398 18.4496 21.8398C16.4996 21.8398 14.8796 20.2198 14.8796 18.2698V15.4598C14.8796 14.4898 15.6396 13.6198 16.7196 13.6198C17.6896 13.6198 18.5596 14.3798 18.5596 15.4598V18.4898" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M15.53 9.11999H14.72C14.5 9.11999 14.29 9.25 14.19 9.44L13.44 10.94C13.33 11.16 13.02 11.16 12.91 10.94L11.07 7.27002C10.96 7.06002 10.66 7.05001 10.55 7.26001L9.70996 8.80999C9.60996 8.99999 9.40997 9.11999 9.18997 9.11999H8.45996" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default MusicPlayTwotoneIcon;
      