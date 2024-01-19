
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const FormatCircleBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M21.5008 5.35C21.5008 6.26 21.0708 7.07 20.4108 7.59C19.9308 7.97 19.3208 8.2 18.6508 8.2C17.0708 8.2 15.8008 6.93 15.8008 5.35C15.8008 4.68 16.0308 4.08 16.4108 3.59H16.4208C16.9308 2.93 17.7408 2.5 18.6508 2.5" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M8.2 5.35C8.2 6.93 6.93 8.2 5.35 8.2C4.68 8.2 4.08 7.97 3.59 7.59C2.93 7.07 2.5 6.26 2.5 5.35C2.5 3.77 3.77 2.5 5.35 2.5C6.26 2.5 7.07 2.93 7.59 3.59C7.97 4.08 8.2 4.68 8.2 5.35Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M21.5008 18.65C21.5008 20.23 20.2308 21.5 18.6508 21.5C17.7408 21.5 16.9308 21.07 16.4208 20.41H16.4108C16.0308 19.93 15.8008 19.32 15.8008 18.65C15.8008 17.07 17.0708 15.8 18.6508 15.8C19.3208 15.8 19.9208 16.03 20.4108 16.41V16.42C21.0708 16.93 21.5008 17.74 21.5008 18.65Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M8.2 18.65C8.2 19.32 7.97 19.92 7.59 20.41C7.07 21.08 6.26 21.5 5.35 21.5C3.77 21.5 2.5 20.23 2.5 18.65C2.5 17.74 2.93 16.93 3.59 16.42V16.41C4.07 16.03 4.68 15.8 5.35 15.8C6.93 15.8 8.2 17.07 8.2 18.65Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M21.5 12C21.5 13.6 21.11 15.09 20.41 16.41C19.93 16.03 19.32 15.8 18.65 15.8C17.07 15.8 15.8 17.07 15.8 18.65C15.8 19.32 16.03 19.92 16.41 20.41C15.09 21.11 13.6 21.5 12 21.5C10.41 21.5 8.91 21.11 7.59 20.41C7.97 19.93 8.2 19.32 8.2 18.65C8.2 17.07 6.93 15.8 5.35 15.8C4.68 15.8 4.08 16.03 3.59 16.41C2.89 15.09 2.5 13.6 2.5 12C2.5 10.41 2.89 8.91 3.59 7.59C4.08 7.97 4.68 8.2 5.35 8.2C6.93 8.2 8.2 6.93 8.2 5.35C8.2 4.68 7.97 4.08 7.59 3.59C8.91 2.89 10.41 2.5 12 2.5C13.6 2.5 15.09 2.89 16.41 3.59C16.03 4.07 15.8 4.68 15.8 5.35C15.8 6.93 17.07 8.2 18.65 8.2C19.32 8.2 19.92 7.97 20.41 7.59C21.11 8.91 21.5 10.41 21.5 12Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default FormatCircleBrokenIcon;
      