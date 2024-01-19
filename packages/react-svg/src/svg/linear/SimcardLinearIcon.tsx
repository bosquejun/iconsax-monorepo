
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const SimcardLinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M19.54 6.53998L16.47 3.46997C15.53 2.52997 14.26 2.01001 12.93 2.01001H8C5 2.01001 3 4.01001 3 7.01001V17.01C3 20.01 5 22.01 8 22.01H16C19 22.01 21 20.01 21 17.01V10.08C21 8.74002 20.47 7.46998 19.54 6.53998Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M9.5 14L7.5 16L9.5 18" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M14.5 14L16.5 16L14.5 18" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default SimcardLinearIcon;
      