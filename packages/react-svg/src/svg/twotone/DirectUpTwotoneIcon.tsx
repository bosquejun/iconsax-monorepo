
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const DirectUpTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M9.16931 4.71L3.06931 16.3C1.61931 19.05 4.54931 22.04 7.32931 20.65L10.5693 19.03C11.4693 18.58 12.5293 18.58 13.4293 19.03L16.6693 20.65C19.4493 22.04 22.3693 19.05 20.9293 16.3L14.8293 4.71C13.6293 2.43 10.3693 2.43 9.16931 4.71Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default DirectUpTwotoneIcon;
      