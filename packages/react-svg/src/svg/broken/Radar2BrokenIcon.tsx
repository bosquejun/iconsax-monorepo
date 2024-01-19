
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Radar2BrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12 12L3.32999 7.01996C2.48999 8.48996 2 10.19 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 9.94997 21.38 8.03996 20.32 6.45996" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M6 4C7.67 2.75 9.75 2 12 2C13.88 2 15.63 2.52001 17.13 3.42001" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M6.82999 8.95999C6.29999 9.84999 6 10.89 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6C11.09 6 10.22 6.20001 9.45001 6.57001" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default Radar2BrokenIcon;
      