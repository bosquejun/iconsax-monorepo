
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const TagRightLinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M4.21995 3.09998H15.6599C16.3399 3.09998 17.19 3.56998 17.55 4.14998L21.73 10.83C22.13 11.48 22.09 12.5 21.63 13.11L16.45 20.01C16.08 20.5 15.28 20.9 14.67 20.9H4.21995C2.46995 20.9 1.40999 18.98 2.32999 17.49L5.09995 13.06C5.46995 12.47 5.46995 11.51 5.09995 10.92L2.32999 6.48998C1.40999 5.01998 2.47995 3.09998 4.21995 3.09998Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default TagRightLinearIcon;
      