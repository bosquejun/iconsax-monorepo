
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const UnlimitedLinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M10.18 9.32001C9.35999 8.19001 8.05001 7.45001 6.54001 7.45001C4.03001 7.45001 1.98999 9.49 1.98999 12C1.98999 14.51 4.03001 16.55 6.54001 16.55C8.23001 16.55 9.80001 15.66 10.67 14.21L12 12L13.32 9.78998C14.19 8.33998 15.76 7.45001 17.45 7.45001C19.96 7.45001 22 9.49 22 12C22 14.51 19.96 16.55 17.45 16.55C15.95 16.55 14.64 15.81 13.81 14.68" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default UnlimitedLinearIcon;
      