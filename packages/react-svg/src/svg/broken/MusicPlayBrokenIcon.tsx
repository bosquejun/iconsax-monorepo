
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MusicPlayBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M2.01958 12.22C1.90958 6.60003 6.34959 2.05005 11.9696 2.05005C17.5896 2.05005 22.0196 6.60005 22.0196 12.11V18.2701C22.0196 20.2201 20.3996 21.8401 18.4496 21.8401C16.4996 21.8401 14.8796 20.2201 14.8796 18.2701V15.4601C14.8796 14.4901 15.6396 13.6201 16.7196 13.6201C17.6896 13.6201 18.5596 14.3801 18.5596 15.4601V18.4901" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M5.47955 18.49V15.57C5.47955 14.6 6.23955 13.73 7.31955 13.73C8.28955 13.73 9.15955 14.49 9.15955 15.57V18.38C9.15955 20.33 7.53954 21.95 5.58954 21.95C3.63954 21.95 2.01953 20.32 2.01953 18.38V16.01" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M11.5407 8.19L11.0807 7.27002C10.9707 7.06002 10.6707 7.05001 10.5607 7.26001L9.7207 8.80999C9.6207 8.99999 9.42071 9.11999 9.20071 9.11999H8.4707" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M15.5302 9.12012H14.7202C14.5002 9.12012 14.2902 9.25012 14.1902 9.44012L13.4402 10.9401C13.3302 11.1601 13.0202 11.1601 12.9102 10.9401" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default MusicPlayBrokenIcon;
      