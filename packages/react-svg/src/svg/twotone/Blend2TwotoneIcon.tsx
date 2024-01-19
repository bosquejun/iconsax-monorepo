
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Blend2TwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 22 22" fill={color} {...otherProps} >
          <path d="M14.9707 8C14.9707 11.87 11.8407 15 7.9707 15C7.6507 15 7.3407 14.98 7.0407 14.93C3.6107 14.48 0.970703 11.55 0.970703 8C0.970703 4.13 4.1007 1 7.9707 1C11.5207 1 14.4507 3.64 14.9007 7.07C14.9507 7.37 14.9707 7.68 14.9707 8Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M20.971 13.9998C20.971 17.8698 17.841 20.9998 13.971 20.9998C10.421 20.9998 7.49102 18.3598 7.04102 14.9298C7.34102 14.9798 7.65102 14.9998 7.97102 14.9998C11.841 14.9998 14.971 11.8698 14.971 7.99982C14.971 7.67982 14.951 7.36982 14.901 7.06982C18.331 7.51982 20.971 10.4498 20.971 13.9998Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M13.1211 13.1201L14.4311 14.4101" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M15.9707 11L14.9707 10" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M10.9707 16L9.9707 15" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default Blend2TwotoneIcon;
      