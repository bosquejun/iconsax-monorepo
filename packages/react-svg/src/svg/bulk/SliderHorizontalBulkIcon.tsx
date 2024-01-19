
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const SliderHorizontalBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M3.5 5.06006V18.9401C3.5 19.3501 3.16 19.6901 2.75 19.6901C2.34 19.6901 2 19.3501 2 18.9401V5.06006C2 4.65006 2.34 4.31006 2.75 4.31006C3.16 4.31006 3.5 4.65006 3.5 5.06006Z" fill={color} />
<path d="M22 5.06006V18.9401C22 19.3501 21.66 19.6901 21.25 19.6901C20.84 19.6901 20.5 19.3501 20.5 18.9401V5.06006C20.5 4.65006 20.84 4.31006 21.25 4.31006C21.66 4.31006 22 4.65006 22 5.06006Z" fill={color} />
<path opacity="0.4" d="M7.59961 21.25H16.3996C18.0596 21.25 19.3996 19.91 19.3996 18.25V5.75C19.3996 4.09 18.0596 2.75 16.3996 2.75H7.59961C5.93961 2.75 4.59961 4.09 4.59961 5.75V18.25C4.59961 19.91 5.93961 21.25 7.59961 21.25Z" fill={color} />
        </svg>
      )
    }
    
    
    export default SliderHorizontalBulkIcon;
      