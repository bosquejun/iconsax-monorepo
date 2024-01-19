
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const DirectLeftTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M4.71 9.1698L16.3 3.0698C19.05 1.6198 22.04 4.5498 20.65 7.3298L19.03 10.5698C18.58 11.4698 18.58 12.5298 19.03 13.4298L20.65 16.6698C22.04 19.4498 19.05 22.3698 16.3 20.9298L4.71 14.8298C2.43 13.6298 2.43 10.3698 4.71 9.1698Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default DirectLeftTwotoneIcon;
      