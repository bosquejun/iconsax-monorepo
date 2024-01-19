
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const GridLockTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M22 11V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H10" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M15.5996 17.2V16.4C15.5996 15.07 15.9996 14 17.9996 14C19.9996 14 20.3996 15.07 20.3996 16.4V17.2" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M20 22.0002H16C14.4 22.0002 14 21.6002 14 20.0002V19.2002C14 17.6002 14.4 17.2002 16 17.2002H20C21.6 17.2002 22 17.6002 22 19.2002V20.0002C22 21.6002 21.6 22.0002 20 22.0002Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default GridLockTwotoneIcon;
      