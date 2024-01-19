
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const StarBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M21.3192 11.91C22.4892 10.74 22.1092 9.55999 20.4792 9.27999L17.9292 8.85999C17.4992 8.78999 16.9892 8.41 16.7992 8.02L15.3892 5.19999C14.6292 3.66999 13.3792 3.66999 12.6192 5.19999L11.2092 8.02C11.0192 8.41 10.5092 8.77999 10.0792 8.85999L7.52922 9.27999C5.89922 9.54999 5.51922 10.73 6.68922 11.91L8.67921 13.9C9.00921 14.23 9.19921 14.88 9.08921 15.35L8.51921 17.81C8.06921 19.75 9.10923 20.51 10.8192 19.49L13.2092 18.07C13.6392 17.81 14.3592 17.81 14.7892 18.07L17.1792 19.49C18.8892 20.5 19.9292 19.75 19.4792 17.81L18.9092 15.35" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M8 5H2" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M5 19H2" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M3 12H2" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default StarBrokenIcon;
      