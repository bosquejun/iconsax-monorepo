
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Shapes1TwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M16.9707 12.25V16.75C16.9707 20.5 15.4707 22 11.7207 22H7.2207C3.4707 22 1.9707 20.5 1.9707 16.75V12.25C1.9707 8.5 3.4707 7 7.2207 7H11.7207C15.4707 7 16.9707 8.5 16.9707 12.25Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M21.97 7.5C21.97 10.37 19.78 12.72 16.97 12.97V12.25C16.97 8.5 15.47 7 11.72 7H11C11.25 4.19 13.6 2 16.47 2C19.26 2 21.56 4.07 21.91 6.77C21.95 7 21.97 7.25 21.97 7.5Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default Shapes1TwotoneIcon;
      