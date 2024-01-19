
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const CloudFogBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M19.799 12H4.19907C3.97907 12 3.77908 11.85 3.70908 11.64C0.959081 2.55003 14.8391 -0.939963 16.4391 8.82004C18.0991 9.03004 19.409 9.97003 20.219 11.23C20.439 11.56 20.189 12 19.799 12Z" fill={color} />
<path opacity="0.4" d="M20 15.78H4C3.59 15.78 3.25 15.44 3.25 15.03C3.25 14.62 3.59 14.28 4 14.28H20C20.41 14.28 20.75 14.62 20.75 15.03C20.75 15.44 20.41 15.78 20 15.78Z" fill={color} />
<path opacity="0.4" d="M18 18.78H6C5.59 18.78 5.25 18.44 5.25 18.03C5.25 17.62 5.59 17.28 6 17.28H18C18.41 17.28 18.75 17.62 18.75 18.03C18.75 18.44 18.41 18.78 18 18.78Z" fill={color} />
<path opacity="0.4" d="M15 21.78H9C8.59 21.78 8.25 21.44 8.25 21.03C8.25 20.62 8.59 20.28 9 20.28H15C15.41 20.28 15.75 20.62 15.75 21.03C15.75 21.44 15.41 21.78 15 21.78Z" fill={color} />
        </svg>
      )
    }
    
    
    export default CloudFogBulkIcon;
      