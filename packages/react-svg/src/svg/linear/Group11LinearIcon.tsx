
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Group11LinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M3 17.9799L5.54999 17.9899C6.45999 17.9899 7.31 17.5399 7.81 16.7899L14.2 7.20994C14.7 6.45994 15.55 5.99993 16.46 6.00993L21.01 6.02994" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M19 19.98L21 17.98" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M8.89001 8.61993L7.81 7.11993C7.3 6.40993 6.47999 5.98993 5.60999 5.99993L3 6.00994" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12.97 15.3799L14.19 16.9499C14.7 17.6099 15.5 17.9999 16.34 17.9999L21.01 17.9799" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M21 6.02002L19 4.02002" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default Group11LinearIcon;
      