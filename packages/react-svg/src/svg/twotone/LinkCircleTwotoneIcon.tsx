
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const LinkCircleTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M7.9407 14.5099C7.3207 14.2799 6.7707 13.8299 6.4207 13.1899C5.6207 11.7299 6.1107 9.82989 7.5307 8.94989L9.8707 7.49988C11.2807 6.61988 13.1007 7.09987 13.9007 8.54987C14.7007 10.0099 14.2107 11.9099 12.7907 12.7899L12.4807 13.0099" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M16.1092 9.4502C16.7292 9.6802 17.2792 10.1302 17.6292 10.7702C18.4292 12.2302 17.9392 14.1302 16.5192 15.0102L14.1792 16.4602C12.7692 17.3402 10.9492 16.8602 10.1492 15.4102C9.34921 13.9502 9.83922 12.0502 11.2592 11.1702L11.5692 10.9502" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default LinkCircleTwotoneIcon;
      