
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ImageTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M21.6809 16.9601L18.5509 9.65013C17.4909 7.17013 15.5409 7.07013 14.2309 9.43013L12.3409 12.8401C11.3809 14.5701 9.5909 14.7201 8.3509 13.1701L8.1309 12.8901C6.8409 11.2701 5.0209 11.4701 4.0909 13.3201L2.3709 16.7701C1.1609 19.1701 2.9109 22.0001 5.5909 22.0001H18.3509C20.9509 22.0001 22.7009 19.3501 21.6809 16.9601Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M6.9707 8C8.62756 8 9.9707 6.65685 9.9707 5C9.9707 3.34315 8.62756 2 6.9707 2C5.31385 2 3.9707 3.34315 3.9707 5C3.9707 6.65685 5.31385 8 6.9707 8Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default ImageTwotoneIcon;
      