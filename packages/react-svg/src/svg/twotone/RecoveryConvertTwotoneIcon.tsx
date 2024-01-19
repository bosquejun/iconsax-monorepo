
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const RecoveryConvertTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 22 22" fill={color} {...otherProps} >
          <path d="M13.6 11.5799V14.3099C13.6 16.5899 12.69 17.4999 10.41 17.4999H7.69C5.42 17.4999 4.5 16.5899 4.5 14.3099V11.5799C4.5 9.3099 5.41 8.3999 7.69 8.3999H10.42C12.69 8.3999 13.6 9.3099 13.6 11.5799Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M17.5004 7.68V10.41C17.5004 12.69 16.5904 13.6 14.3104 13.6H13.6004V11.58C13.6004 9.31 12.6904 8.4 10.4104 8.4H8.40039V7.68C8.40039 5.4 9.31039 4.5 11.5904 4.5H14.3204C16.5904 4.5 17.5004 5.41 17.5004 7.68Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M21 14C21 17.87 17.87 21 14 21L15.05 19.25" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M1 8C1 4.13 4.13 1 8 1L6.95 2.75" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default RecoveryConvertTwotoneIcon;
      