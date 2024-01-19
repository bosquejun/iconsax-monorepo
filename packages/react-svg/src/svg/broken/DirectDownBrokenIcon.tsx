
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const DirectDownBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M3.06931 7.6999C1.61931 4.9499 4.54931 1.9599 7.32931 3.3499L10.5693 4.9699C11.4693 5.4199 12.5293 5.4199 13.4293 4.9699L16.6693 3.3499C19.4493 1.9599 22.3693 4.9499 20.9293 7.6999L14.8293 19.2899C13.6293 21.5699 10.3693 21.5699 9.16931 19.2899L5.49931 12.3199" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default DirectDownBrokenIcon;
      