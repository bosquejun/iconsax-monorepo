
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const AirpodTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M2.62012 15.75V8.25C2.62012 7.48 2.65012 6.79 2.73012 6.18C3.10012 2.89 4.65012 2 8.88012 2H15.1301C19.3501 2 20.9101 2.89 21.2701 6.18C21.3601 6.79 21.3801 7.48 21.3801 8.25V15.75C21.3801 16.52 21.3501 17.21 21.2701 17.83C20.9001 21.11 19.3501 22 15.1201 22H8.88012C4.66012 22 3.10012 21.11 2.74012 17.83C2.65012 17.21 2.62012 16.52 2.62012 15.75Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default AirpodTwotoneIcon;
      