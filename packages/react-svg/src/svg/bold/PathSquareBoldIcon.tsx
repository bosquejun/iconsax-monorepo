
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const PathSquareBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.66 11.25L15.04 12.27L15.18 14.67C15.31 16.01 14.85 16.47 13.58 16.62L8.51 17.22C8.23176 17.2579 8.13732 16.9427 8.33589 16.7441L9.88 15.2C10.17 14.91 10.17 14.43 9.88 14.14C9.58 13.85 9.11 13.85 8.81 14.14L7.27478 15.683C7.07699 15.8818 6.76211 15.7879 6.8 15.51L7.39 10.44C7.55 9.17 8.01 8.76 9.35 8.84L11.74 8.98L12.77 7.35C13.24 6.61 14.2 6.57 14.9 7.27L16.75 9.12C17.41 9.77 17.37 10.8 16.66 11.25Z" fill={color} />
        </svg>
      )
    }
    
    
    export default PathSquareBoldIcon;
      