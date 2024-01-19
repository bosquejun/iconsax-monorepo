
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MusicPlayLinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M5.48009 18.4901V15.5701C5.48009 14.6001 6.24009 13.73 7.32009 13.73C8.29009 13.73 9.16008 14.4901 9.16008 15.5701V18.3801C9.16008 20.3301 7.54007 21.9501 5.59007 21.9501C3.64007 21.9501 2.02007 20.3201 2.02007 18.3801V12.22C1.91007 6.60003 6.35008 2.05005 11.9701 2.05005C17.5901 2.05005 22.0201 6.60005 22.0201 12.11V18.2701C22.0201 20.2201 20.4001 21.8401 18.4501 21.8401C16.5001 21.8401 14.8801 20.2201 14.8801 18.2701V15.4601C14.8801 14.4901 15.6401 13.6201 16.7201 13.6201C17.6901 13.6201 18.5601 14.3801 18.5601 15.4601V18.4901" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M15.53 9.11999H14.72C14.5 9.11999 14.29 9.25 14.19 9.44L13.44 10.94C13.33 11.16 13.02 11.16 12.91 10.94L11.07 7.27002C10.96 7.06002 10.66 7.05001 10.55 7.26001L9.70996 8.80999C9.60996 8.99999 9.40997 9.11999 9.18997 9.11999H8.45996" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default MusicPlayLinearIcon;
      