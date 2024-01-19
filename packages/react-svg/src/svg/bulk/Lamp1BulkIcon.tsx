
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Lamp1BulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M20.7807 14.18V17.12C20.7807 18.22 19.8807 19.12 18.7807 19.12H5.2207C4.1207 19.12 3.2207 18.22 3.2207 17.12V14.18C3.2207 9.35998 7.1207 5.45998 11.9407 5.45998H12.0607C16.8807 5.44998 20.7807 9.35998 20.7807 14.18Z" fill={color} />
<path d="M12.75 2.53003V5.49003C12.52 5.47003 12.29 5.46003 12.06 5.46003H11.94C11.71 5.46003 11.48 5.47003 11.25 5.49003V2.53003C11.25 2.12003 11.59 1.78003 12 1.78003C12.41 1.78003 12.75 2.12003 12.75 2.53003Z" fill={color} />
<path d="M15.3197 19.1101C15.1997 20.8501 13.7597 22.2201 11.9997 22.2201C10.2397 22.2201 8.78969 20.8501 8.67969 19.1101H15.3197Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Lamp1BulkIcon;
      