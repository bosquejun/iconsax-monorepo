
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const FlashCircleLinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M8.67999 11.9101L10.33 12.32L9.38 16.1601C9.16 17.0601 9.59998 17.36 10.36 16.83L15.54 13.2401C16.17 12.8001 16.08 12.2901 15.33 12.1001L13.68 11.6901L14.63 7.85006C14.85 6.95006 14.41 6.65007 13.65 7.18007L8.47 10.7701C7.84 11.2101 7.92999 11.7201 8.67999 11.9101Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default FlashCircleLinearIcon;
      