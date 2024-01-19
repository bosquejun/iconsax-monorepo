
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const RotateLeftBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M20.6701 13.3299C20.6701 18.1199 16.7901 21.9999 12.0001 21.9999C7.21008 21.9999 3.33008 18.1199 3.33008 13.3299C3.33008 11.5499 3.87008 9.8899 4.79008 8.5099M9.11008 5.0799C9.98008 4.8199 10.9401 4.6499 12.0001 4.6499C15.2101 4.6499 18.0201 6.3999 19.5101 8.9899" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M7.86914 5.32L10.7591 2" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M7.86914 5.32007L11.2391 7.78007" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default RotateLeftBrokenIcon;
      