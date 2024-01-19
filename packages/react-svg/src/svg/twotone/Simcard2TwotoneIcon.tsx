
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Simcard2TwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M16 12.6899V18.0799C16 20.4199 14.44 21.9699 12.11 21.9699H5.89C3.56 21.9699 2 20.4199 2 18.0799V10.3099C2 7.96992 3.56 6.41992 5.89 6.41992H9.72C10.75 6.41992 11.74 6.82992 12.47 7.55992L14.86 9.93992C15.59 10.6699 16 11.6599 16 12.6899Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M22 8.25021V13.6402C22 15.9702 20.44 17.5302 18.11 17.5302H16V12.6902C16 11.6602 15.59 10.6702 14.86 9.94021L12.47 7.56021C11.74 6.83021 10.75 6.42021 9.72 6.42021H8V5.86021C8 3.53022 9.56 1.97021 11.89 1.97021H15.72C16.75 1.97021 17.74 2.38021 18.47 3.11021L20.86 5.50021C21.59 6.23021 22 7.22021 22 8.25021Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default Simcard2TwotoneIcon;
      