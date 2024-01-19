
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const LampTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M5.78962 14.69H18.2096C19.8696 14.69 20.8696 13.38 20.4396 11.78L18.2396 3.71C17.9796 2.77 16.9696 2 16.0096 2H7.98962C7.02962 2 6.01962 2.77 5.76962 3.7L3.56962 11.77C3.12962 13.38 4.12962 14.69 5.78962 14.69Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default LampTwotoneIcon;
      