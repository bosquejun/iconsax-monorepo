
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const LocationMinusBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M20.6188 8.7C19.5788 4.07 15.5388 2 11.9988 2C11.9988 2 11.9988 2 11.9888 2C8.45877 2 4.42877 4.07 3.37877 8.69C2.19877 13.85 5.35877 18.22 8.21877 20.98C9.27877 22 10.6388 22.51 11.9988 22.51C13.3588 22.51 14.7188 22 15.7688 20.98C18.6288 18.22 21.7888 13.86 20.6188 8.7ZM14.7488 11.75H9.24877C8.83877 11.75 8.49877 11.41 8.49877 11C8.49877 10.59 8.83877 10.25 9.24877 10.25H14.7488C15.1588 10.25 15.4988 10.59 15.4988 11C15.4988 11.41 15.1588 11.75 14.7488 11.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default LocationMinusBoldIcon;
      