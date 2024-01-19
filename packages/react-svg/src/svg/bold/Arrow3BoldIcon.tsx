
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Arrow3BoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M10.9814 6.19L7.27141 2.48C7.20141 2.41 7.11141 2.35 7.01141 2.31C7.00141 2.31 6.99141 2.31 6.98141 2.3C6.90141 2.27 6.82141 2.25 6.73141 2.25C6.53141 2.25 6.34141 2.33 6.20141 2.47L2.47141 6.19C2.18141 6.48 2.18141 6.96 2.47141 7.25C2.76141 7.54 3.24141 7.54 3.53141 7.25L5.98141 4.8V21C5.98141 21.41 6.32141 21.75 6.73141 21.75C7.14141 21.75 7.48141 21.41 7.48141 21V4.81L9.92141 7.25C10.0714 7.4 10.2614 7.47 10.4514 7.47C10.6414 7.47 10.8314 7.4 10.9814 7.25C11.2714 6.96 11.2714 6.49 10.9814 6.19Z" fill={color} />
<path d="M21.5283 16.75C21.2383 16.46 20.7583 16.46 20.4683 16.75L18.0183 19.2V3C18.0183 2.59 17.6783 2.25 17.2683 2.25C16.8583 2.25 16.5183 2.59 16.5183 3V19.19L14.0783 16.75C13.7883 16.46 13.3083 16.46 13.0183 16.75C12.7283 17.04 12.7283 17.52 13.0183 17.81L16.7283 21.52C16.7983 21.59 16.8883 21.65 16.9883 21.69C16.9983 21.69 17.0083 21.69 17.0183 21.7C17.0983 21.73 17.1883 21.75 17.2783 21.75C17.4783 21.75 17.6683 21.67 17.8083 21.53L21.5283 17.81C21.8183 17.51 21.8183 17.04 21.5283 16.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Arrow3BoldIcon;
      