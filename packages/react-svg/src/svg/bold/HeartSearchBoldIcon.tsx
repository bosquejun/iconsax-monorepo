
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const HeartSearchBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M21.74 20.5083L20.88 19.6483C21.33 18.9683 21.59 18.1583 21.59 17.2883C21.59 14.9183 19.67 12.9883 17.29 12.9883C14.91 12.9883 13 14.9183 13 17.2983C13 19.6783 14.92 21.5983 17.3 21.5983C18.17 21.5983 18.98 21.3383 19.66 20.8883L20.52 21.7483C20.69 21.9183 20.91 22.0083 21.14 22.0083C21.37 22.0083 21.59 21.9183 21.76 21.7483C22.09 21.3983 22.09 20.8483 21.74 20.5083Z" fill={color} />
<path d="M22 8.73062C22 9.92062 21.81 11.0206 21.48 12.0406C21.42 12.2506 21.17 12.3106 20.99 12.1806C19.9 11.3706 18.57 10.9406 17.2 10.9406C13.73 10.9406 10.9 13.7706 10.9 17.2406C10.9 18.3206 11.18 19.3806 11.71 20.3206C11.87 20.6006 11.68 20.9606 11.38 20.8506C8.97 20.0306 4.1 17.0406 2.52 12.0406C2.19 11.0206 2 9.92062 2 8.73062C2 5.64062 4.49 3.14063 7.56 3.14063C9.37 3.14063 10.99 4.02062 12 5.37062C13.01 4.02062 14.63 3.14063 16.44 3.14063C19.51 3.14062 22 5.64062 22 8.73062Z" fill={color} />
        </svg>
      )
    }
    
    
    export default HeartSearchBoldIcon;
      