
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ToggleOnLinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M13.3 16H15.7C17.7 16 18.5 15.2 18.5 13.2V10.8C18.5 8.8 17.7 8 15.7 8H13.3C11.3 8 10.5 8.8 10.5 10.8V13.2C10.5 15.2 11.3 16 13.3 16Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M17 20H7C3 20 2 19 2 15V9C2 5 3 4 7 4H17C21 4 22 5 22 9V15C22 19 21 20 17 20Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default ToggleOnLinearIcon;
      