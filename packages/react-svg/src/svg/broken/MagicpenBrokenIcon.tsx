
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MagicpenBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M16.9795 10.0199L19.4995 7.49994C20.3295 6.66994 20.3295 5.32994 19.4995 4.49994C18.6695 3.66994 17.3295 3.66994 16.4995 4.49994L3.49945 17.4999C2.66945 18.3299 2.66945 19.6699 3.49945 20.4999C4.32945 21.3299 5.66945 21.3299 6.49945 20.4999L14.4995 12.4999" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M18.0098 8.99023L15.0098 5.99023" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M9.56 3.5L10 5L8.5 4.56L7 5L7.44 3.5L7 2L8.5 2.44" stroke={color} stroke-linecap="round" stroke-linejoin="round" />
<path d="M4.5 8.44L6 8L5.56 9.5L6 11L4.5 10.56L3 11L3.44 9.5L3 8L4.5 8.44Z" stroke={color} stroke-linecap="round" stroke-linejoin="round" />
<path d="M18.44 14.5L18 13L19.5 13.44L21 13L20.56 14.5L21 16L19.5 15.56" stroke={color} stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default MagicpenBrokenIcon;
      