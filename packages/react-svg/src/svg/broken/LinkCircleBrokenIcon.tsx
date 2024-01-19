
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const LinkCircleBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M7.9407 14.5099C7.3207 14.2799 6.7707 13.8299 6.4207 13.1899C5.6207 11.7299 6.1107 9.82989 7.5307 8.94989L9.8707 7.49988C11.2807 6.61988 13.1007 7.09987 13.9007 8.54987C14.7007 10.0099 14.2107 11.9099 12.7907 12.7899L12.4807 13.0099" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M16.1092 9.44995C16.7292 9.67995 17.2792 10.1299 17.6292 10.7699C18.4292 12.2299 17.9392 14.1299 16.5192 15.0099L14.1792 16.4599C12.7692 17.3399 10.9492 16.8599 10.1492 15.4099C9.34921 13.9499 9.83922 12.05 11.2592 11.17L11.5692 10.95" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.30001 7.97 2.85001" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default LinkCircleBrokenIcon;
      