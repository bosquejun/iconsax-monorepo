
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ProfileAddTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M12.1606 10.87C12.0606 10.86 11.9406 10.86 11.8306 10.87C9.45058 10.79 7.56058 8.84 7.56058 6.44C7.55058 3.99 9.54058 2 11.9906 2C14.4406 2 16.4306 3.99 16.4306 6.44C16.4306 8.84 14.5306 10.79 12.1606 10.87Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M11.9891 21.8102C10.1691 21.8102 8.35906 21.3502 6.97906 20.4302C4.55906 18.8102 4.55906 16.1702 6.97906 14.5602C9.72906 12.7202 14.2391 12.7202 16.9891 14.5602" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default ProfileAddTwotoneIcon;
      