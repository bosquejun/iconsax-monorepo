
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MusicnoteBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M19.2605 2.8702L14.8405 1.4002C13.9205 1.0902 12.9905 1.2002 12.3105 1.7002C11.6205 2.2002 11.2305 3.0402 11.2305 4.0102V7.7802L18.1105 10.0702C18.4505 10.1902 18.8005 10.2402 19.1305 10.2402C19.6905 10.2402 20.2105 10.0802 20.6405 9.7702C21.3305 9.2702 21.7205 8.4302 21.7205 7.4602V6.2802C21.7205 4.8502 20.6205 3.3202 19.2605 2.8702Z" fill={color} />
<path d="M12.7207 8.27002V18C12.7207 20.62 10.5907 22.75 7.9707 22.75C5.3507 22.75 3.2207 20.62 3.2207 18C3.2207 15.38 5.3507 13.25 7.9707 13.25C9.2307 13.25 10.3707 13.75 11.2207 14.55V7.77002L12.7207 8.27002Z" fill={color} />
        </svg>
      )
    }
    
    
    export default MusicnoteBulkIcon;
      