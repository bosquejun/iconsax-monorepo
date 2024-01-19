
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const CalendarCircleBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM6.85 9.44C7.27 8.47 8.06 7.72 9.15 7.38V6.58C9.15 6.17 9.49 5.83 9.9 5.83C10.31 5.83 10.65 6.17 10.65 6.58V7.17H13.36V6.58C13.36 6.17 13.7 5.83 14.11 5.83C14.52 5.83 14.86 6.17 14.86 6.58V7.37C15.95 7.71 16.74 8.46 17.16 9.43C17.3 9.76 17.06 10.14 16.7 10.14H7.31C6.95 10.14 6.71 9.77 6.85 9.44ZM17.5 14.17C17.5 16.37 16 18.17 13.5 18.17H10.5C8 18.17 6.5 16.37 6.5 14.17V11.64C6.5 11.36 6.72 11.14 7 11.14H17C17.28 11.14 17.5 11.36 17.5 11.64V14.17Z" fill={color} />
        </svg>
      )
    }
    
    
    export default CalendarCircleBoldIcon;
      