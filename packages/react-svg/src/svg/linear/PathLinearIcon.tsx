
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const PathLinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M19.79 7.27009L16.76 4.24009C15.61 3.09009 14.04 3.15009 13.27 4.38009L11.58 7.05009L16.98 12.4501L19.65 10.7601C20.8 10.0301 20.87 8.35009 19.79 7.27009Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M11.58 7.04996L7.65 6.80996C5.46 6.67996 4.69 7.34996 4.45 9.43996L3.47 17.76C3.26 19.51 4.53 20.77 6.27 20.56L14.59 19.58C16.68 19.33 17.44 18.57 17.22 16.38L16.99 12.45" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M4.61 19.4199L7.64 16.3799" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default PathLinearIcon;
      