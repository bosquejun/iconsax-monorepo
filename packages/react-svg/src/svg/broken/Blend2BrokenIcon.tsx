
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Blend2BrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M8.9707 2C12.5207 2 15.4507 4.64 15.9007 8.07C15.9507 8.37 15.9707 8.68 15.9707 9C15.9707 12.87 12.8407 16 8.9707 16C8.6507 16 8.3407 15.98 8.0407 15.93C4.6107 15.48 1.9707 12.55 1.9707 9C1.9707 7.07 2.7507 5.32 4.0207 4.05" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M21.9691 15.0001C21.9691 18.8701 18.8391 22.0001 14.9691 22.0001C11.4191 22.0001 8.48906 19.3601 8.03906 15.9301C8.33906 15.9801 8.64906 16.0001 8.96906 16.0001C12.8391 16.0001 15.9691 12.8701 15.9691 9.00007C15.9691 8.68007 15.9491 8.37007 15.8991 8.07007C19.3291 8.52007 21.9691 11.4501 21.9691 15.0001Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M14.1191 14.1201L15.4291 15.4101" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M16.9707 12L15.9707 11" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M11.9707 17L10.9707 16" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default Blend2BrokenIcon;
      