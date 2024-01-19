
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const RecoveryConvertBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M5.5293 15.9799C5.6993 17.7699 6.6393 18.4999 8.6893 18.4999H11.4193C13.6993 18.4999 14.6093 17.5899 14.6093 15.3099V12.5799C14.6093 10.3099 13.6993 9.3999 11.4193 9.3999H8.6893C6.6193 9.3999 5.6793 10.1499 5.5293 11.9999" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M18.5004 8.68V11.41C18.5004 13.69 17.5904 14.6 15.3104 14.6H14.6004V12.58C14.6004 10.31 13.6904 9.4 11.4104 9.4H9.40039V8.68C9.40039 6.4 10.3104 5.5 12.5904 5.5H15.3204C17.5904 5.5 18.5004 6.41 18.5004 8.68Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2 9C2 5.13 5.13 2 9 2L7.95 3.75" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default RecoveryConvertBrokenIcon;
      