
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Chart21BrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M2 13.01V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M17.5 11.57V16.5C17.5 17.6 16.61 18.5 15.5 18.5C14.4 18.5 13.5 17.6 13.5 16.5V7.5C13.5 6.4 14.4 5.5 15.5 5.5C16.6 5.5 17.5 6.4 17.5 7.5" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M8.5 18.5C9.6 18.5 10.5 17.6 10.5 16.5V13C10.5 11.9 9.6 11 8.5 11C7.4 11 6.5 11.9 6.5 13V16.5C6.5 17.6 7.39 18.5 8.5 18.5Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default Chart21BrokenIcon;
      