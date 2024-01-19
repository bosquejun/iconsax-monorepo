
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const LampSlashBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M20.0297 2.47998L4.17969 18.33" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M13.5996 2.16992C15.0596 2.48992 16.3596 3.26992 17.3596 4.34992" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M5.25008 12.9998C4.83008 12.0298 4.58008 10.9798 4.58008 9.89977C4.58008 6.51976 6.57008 3.63977 9.38008 2.50977" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M19.0602 7.2998C20.2802 11.1798 18.3102 15.0798 15.5202 16.8698V18.0298C15.5202 18.3198 15.6202 18.9898 14.6202 18.9898H9.42016C8.39016 18.9898 8.52016 18.5598 8.52016 18.0298V16.8698C8.04016 16.5698 7.59016 16.1998 7.16016 15.7698" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M8.5 22C10.79 21.35 13.21 21.35 15.5 22" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default LampSlashBrokenIcon;
      