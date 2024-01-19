
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const GameLinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M9.57002 12.46L6.52002 15.51" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M6.55005 12.49L9.60005 15.54" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M13.53 14H13.54" stroke={color} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M17.47 14H17.48" stroke={color} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M15.5 15.98V15.96" stroke={color} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M15.5 12.04V12.02" stroke={color} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M9 22H15C20 22 22 20 22 15V13C22 8 20 6 15 6H9C4 6 2 8 2 13V15C2 20 4 22 9 22Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M13.01 2L13 3.01C12.99 3.56 12.55 4 12 4H11.97C11.42 4 10.98 4.45 10.98 5C10.98 5.55 11.43 6 11.98 6H12.98" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default GameLinearIcon;
      