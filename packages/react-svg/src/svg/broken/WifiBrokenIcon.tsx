
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const WifiBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M16.3105 10.21C17.2805 10.61 18.2105 11.15 19.0905 11.83" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M4.91016 11.8399C7.35016 9.94991 10.2101 9.1399 13.0101 9.3999" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M8.35938 5.28001C12.9894 4.18001 17.9094 5.2 21.9994 8.36" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2 8.36002C2.94 7.64002 3.91999 7.02002 4.92999 6.52002" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M6.78906 15.4902C9.93906 13.0502 14.0491 13.0502 17.1991 15.4902" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M9.40039 19.1501C10.9804 17.9301 13.0304 17.9301 14.6104 19.1501" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default WifiBrokenIcon;
      