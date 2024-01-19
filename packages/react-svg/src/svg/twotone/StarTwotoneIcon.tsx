
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const StarTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M15.3909 5.21L16.8009 8.02999C16.9909 8.41999 17.5009 8.78999 17.9309 8.86999L20.4809 9.28999C22.1109 9.55999 22.4909 10.74 21.3209 11.92L19.3309 13.91C19.0009 14.24 18.8109 14.89 18.9209 15.36L19.4909 17.82C19.9409 19.76 18.9009 20.52 17.1909 19.5L14.8009 18.08C14.3709 17.82 13.6509 17.82 13.2209 18.08L10.8309 19.5C9.12091 20.51 8.08093 19.76 8.53093 17.82L9.10093 15.36C9.21093 14.9 9.02093 14.25 8.69093 13.91L6.70094 11.92C5.53094 10.75 5.91094 9.56999 7.54094 9.28999L10.0909 8.86999C10.5209 8.79999 11.0309 8.41999 11.2209 8.02999L12.6309 5.21C13.3809 3.68 14.6209 3.68 15.3909 5.21Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M8 5H2" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M5 19H2" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M3 12H2" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default StarTwotoneIcon;
      