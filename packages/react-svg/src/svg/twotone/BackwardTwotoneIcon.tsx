
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const BackwardTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M22.0002 8.33994V15.6599C22.0002 17.1599 20.3703 18.0999 19.0703 17.3499L15.9002 15.5299L12.7303 13.7C12.5303 13.58 12.3702 13.45 12.2402 13.29V10.73C12.3702 10.57 12.5303 10.44 12.7303 10.32L15.9002 8.48993L19.0703 6.66996C20.3703 5.89996 22.0002 6.83994 22.0002 8.33994Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12.2391 8.33994V15.6599C12.2391 17.1599 10.6091 18.0999 9.30914 17.3499L6.13915 15.5299L2.96914 13.7C1.66914 12.95 1.66914 11.08 2.96914 10.32L6.13915 8.48993L9.30914 6.66996C10.6091 5.89996 12.2391 6.83994 12.2391 8.33994Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default BackwardTwotoneIcon;
      