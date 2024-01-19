
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const SliderVertical1BulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M2 9V15C2 16.66 3.34 18 5 18H19C20.66 18 22 16.66 22 15V9C22 7.34 20.66 6 19 6H5C3.34 6 2 7.34 2 9Z" fill={color} />
<path d="M5.33008 5.33V5.67C5.33008 5.79 5.33008 5.9 5.34008 6.02C5.39008 6.01 5.44008 6 5.50008 6H7.00008H17.0001H18.5001C18.5601 6 18.6101 6.01 18.6601 6.02C18.6701 5.91 18.6701 5.8 18.6701 5.67V5.33C18.6701 2.67 18.0001 2 15.3301 2H8.67008C6.00008 2 5.33008 2.67 5.33008 5.33Z" fill={color} />
<path d="M18.5001 18H17.0001H7.00008H5.50008C5.44008 18 5.39008 17.99 5.34008 17.98C5.33008 18.09 5.33008 18.2 5.33008 18.33V18.67C5.33008 21.33 6.00008 22 8.67008 22H15.3301C18.0001 22 18.6701 21.33 18.6701 18.67V18.33C18.6701 18.21 18.6701 18.1 18.6601 17.98C18.6101 17.99 18.5601 18 18.5001 18Z" fill={color} />
        </svg>
      )
    }
    
    
    export default SliderVertical1BulkIcon;
      