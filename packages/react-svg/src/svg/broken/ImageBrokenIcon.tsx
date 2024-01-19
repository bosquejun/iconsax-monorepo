
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ImageBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12.3298 12.8399C11.3698 14.5699 9.57978 14.7199 8.33978 13.1699L8.11978 12.8899C6.82978 11.2699 5.00978 11.4699 4.07978 13.3199L2.35978 16.7699C1.15978 19.1699 2.90978 21.9999 5.58978 21.9999H18.3498C20.9398 21.9999 22.6898 19.3499 21.6698 16.9599L18.5398 9.64988C17.4798 7.16988 15.5298 7.06988 14.2198 9.42988" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M9.9707 5C9.9707 6.66 8.6307 8 6.9707 8C5.3107 8 3.9707 6.66 3.9707 5C3.9707 3.34 5.3107 2 6.9707 2C7.3307 2 7.6707 2.06 7.9807 2.18" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default ImageBrokenIcon;
      