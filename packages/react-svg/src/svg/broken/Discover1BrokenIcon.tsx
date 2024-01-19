
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Discover1BrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M7.86912 4.59C6.41912 4.95 4.94912 6.42 4.58912 7.87L2.09912 17.8C1.34912 20.8 3.18912 22.65 6.19912 21.9L16.1291 19.42C17.5691 19.06 19.0491 17.58 19.4091 16.14L21.8991 6.2C22.6491 3.2 20.8091 1.35 17.7991 2.1L13.0091 3.3" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default Discover1BrokenIcon;
      