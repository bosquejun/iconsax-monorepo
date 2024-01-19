
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MedalBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M16.5 3.66C17.88 4.85 18.75 6.58 18.75 8.5C18.75 12.09 15.73 15 12 15C8.27 15 5.25 12.09 5.25 8.5C5.25 4.91 8.27 2 12 2" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M7.51974 13.52L7.50977 20.9C7.50977 21.8 8.13977 22.24 8.91977 21.87L11.5998 20.6C11.8198 20.49 12.1898 20.49 12.4098 20.6L15.0998 21.87C15.8698 22.23 16.5098 21.8 16.5098 20.9V13.34" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default MedalBrokenIcon;
      