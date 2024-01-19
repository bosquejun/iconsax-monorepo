
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ChartSuccessBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M20.97 16H18.03C16.76 16 16 16.76 16 18.03V20.97C16 22.24 16.76 23 18.03 23H20.97C22.24 23 23 22.24 23 20.97V18.03C23 16.76 22.24 16 20.97 16ZM21.63 18.45L19.26 21.22C19.16 21.33 19.03 21.4 18.88 21.4C18.88 21.4 18.87 21.4 18.86 21.4C18.73 21.4 18.59 21.35 18.5 21.25L17.4 20.17C17.2 19.97 17.2 19.64 17.4 19.43C17.6 19.23 17.93 19.23 18.14 19.43L18.83 20.12L20.84 17.78C21.02 17.56 21.35 17.53 21.57 17.72C21.79 17.91 21.81 18.24 21.63 18.45Z" fill={color} />
<path d="M20.97 16H18.03C16.76 16 16 16.76 16 18.03V20.97C16 22.24 16.76 23 18.03 23H20.97C22.24 23 23 22.24 23 20.97V18.03C23 16.76 22.24 16 20.97 16ZM21.63 18.45L19.26 21.22C19.16 21.33 19.03 21.4 18.88 21.4C18.88 21.4 18.87 21.4 18.86 21.4C18.73 21.4 18.59 21.35 18.5 21.25L17.4 20.17C17.2 19.97 17.2 19.64 17.4 19.43C17.6 19.23 17.93 19.23 18.14 19.43L18.83 20.12L20.84 17.78C21.02 17.56 21.35 17.53 21.57 17.72C21.79 17.91 21.81 18.24 21.63 18.45Z" fill={color} />
<path d="M21.97 7.21C21.69 4.48 19.52 2.31 16.79 2.03C16.59 2.01 16.39 2 16.19 2H7.81C7.61 2 7.41 2.01 7.21 2.03C4.48 2.31 2.31 4.48 2.03 7.21C2.01 7.41 2 7.61 2 7.81V16.19C2 16.39 2.01 16.59 2.03 16.79C2.31 19.52 4.48 21.69 7.21 21.97C7.41 21.99 7.61 22 7.81 22H14C14.55 22 15 21.55 15 21V18.03C15 16.36 16.36 15 18.03 15H21C21.55 15 22 14.55 22 14V7.81C22 7.61 21.99 7.41 21.97 7.21ZM7.75 13.5C7.75 13.91 7.41 14.25 7 14.25C6.59 14.25 6.25 13.91 6.25 13.5V10.5C6.25 10.09 6.59 9.75 7 9.75C7.41 9.75 7.75 10.09 7.75 10.5V13.5ZM12.75 13.5C12.75 13.91 12.41 14.25 12 14.25C11.59 14.25 11.25 13.91 11.25 13.5V10.5C11.25 10.09 11.59 9.75 12 9.75C12.41 9.75 12.75 10.09 12.75 10.5V13.5Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ChartSuccessBoldIcon;
      