
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const SliderVerticalTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M7 6H17C17.62 6 18.17 6.02 18.66 6.09C21.29 6.38 22 7.62 22 11V13C22 16.38 21.29 17.62 18.66 17.91C18.17 17.98 17.62 18 17 18H7C6.38 18 5.83 17.98 5.34 17.91C2.71 17.62 2 16.38 2 13V11C2 7.62 2.71 6.38 5.34 6.09C5.83 6.02 6.38 6 7 6Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M17.0001 18.0002C17.6201 18.0002 18.1701 17.9802 18.6601 17.9102C18.6701 18.0502 18.6701 18.1802 18.6701 18.3302V18.6702C18.6701 21.3302 18.0001 22.0002 15.3301 22.0002H8.67008C6.00008 22.0002 5.33008 21.3302 5.33008 18.6702V18.3302C5.33008 18.1802 5.33008 18.0502 5.34008 17.9102C5.83008 17.9802 6.38008 18.0002 7.00008 18.0002H17.0001Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M8.67008 2H15.3301C18.0001 2 18.6701 2.67 18.6701 5.33V5.67C18.6701 5.82 18.6701 5.95 18.6601 6.09C18.1701 6.02 17.6201 6 17.0001 6H7.00008C6.38008 6 5.83008 6.02 5.34008 6.09C5.33008 5.95 5.33008 5.82 5.33008 5.67V5.33C5.33008 2.67 6.00008 2 8.67008 2Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default SliderVerticalTwotoneIcon;
      