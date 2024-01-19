
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const FormatSquareOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M17.05 20.75H6.95C6.73 20.75 6.52 20.65 6.37 20.48C6.22 20.31 6.17 20.08 6.21 19.86C6.23 19.74 6.25 19.62 6.25 19.5C6.25 18.54 5.46 17.75 4.5 17.75C4.38 17.75 4.25 17.76 4.14 17.79C3.92 17.83 3.69 17.77 3.52 17.63C3.35 17.49 3.25 17.28 3.25 17.05V6.95C3.25 6.73 3.35 6.52 3.52 6.37C3.69 6.22 3.91 6.17 4.14 6.21C4.25 6.24 4.38 6.25 4.5 6.25C5.46 6.25 6.25 5.46 6.25 4.5C6.25 4.38 6.24 4.25 6.21 4.14C6.17 3.92 6.23 3.69 6.37 3.52C6.51 3.35 6.72 3.25 6.95 3.25H17.05C17.27 3.25 17.48 3.35 17.63 3.52C17.78 3.69 17.83 3.92 17.79 4.14C17.77 4.26 17.75 4.38 17.75 4.5C17.75 5.46 18.54 6.25 19.5 6.25C19.62 6.25 19.75 6.24 19.86 6.21C20.08 6.17 20.31 6.23 20.48 6.37C20.65 6.51 20.75 6.72 20.75 6.95V17.05C20.75 17.27 20.65 17.48 20.48 17.63C20.31 17.78 20.08 17.83 19.86 17.79C19.74 17.77 19.62 17.75 19.5 17.75C18.54 17.75 17.75 18.54 17.75 19.5C17.75 19.62 17.76 19.75 17.79 19.86C17.83 20.08 17.77 20.31 17.63 20.48C17.49 20.65 17.27 20.75 17.05 20.75ZM7.74 19.25H16.26C16.38 17.66 17.66 16.38 19.25 16.26V7.74C17.66 7.62 16.38 6.34 16.26 4.75H7.74C7.62 6.34 6.34 7.62 4.75 7.74V16.26C6.34 16.38 7.62 17.66 7.74 19.25Z" fill={color} />
<path d="M4.5 7.75C4.28 7.75 4.07 7.73 3.86 7.69C2.34 7.38 1.25 6.04 1.25 4.5C1.25 2.71 2.71 1.25 4.5 1.25C6.04 1.25 7.38 2.34 7.69 3.85C7.73 4.07 7.75 4.28 7.75 4.5C7.75 6.29 6.29 7.75 4.5 7.75ZM4.5 2.75C3.54 2.75 2.75 3.54 2.75 4.5C2.75 5.33 3.34 6.05 4.15 6.21C4.25 6.24 4.38 6.25 4.5 6.25C5.46 6.25 6.25 5.46 6.25 4.5C6.25 4.38 6.24 4.25 6.21 4.14C6.05 3.34 5.33 2.75 4.5 2.75Z" fill={color} />
<path d="M19.5 7.75C17.71 7.75 16.25 6.29 16.25 4.5C16.25 4.28 16.27 4.07 16.31 3.86C16.62 2.34 17.96 1.25 19.5 1.25C21.29 1.25 22.75 2.71 22.75 4.5C22.75 6.04 21.66 7.38 20.15 7.69C19.93 7.73 19.72 7.75 19.5 7.75ZM19.5 2.75C18.67 2.75 17.95 3.34 17.79 4.15C17.77 4.26 17.75 4.38 17.75 4.5C17.75 5.46 18.54 6.25 19.5 6.25C19.62 6.25 19.75 6.24 19.86 6.21C20.66 6.05 21.25 5.33 21.25 4.5C21.25 3.54 20.46 2.75 19.5 2.75Z" fill={color} />
<path d="M4.5 22.75C2.71 22.75 1.25 21.29 1.25 19.5C1.25 17.96 2.34 16.62 3.85 16.31C4.06 16.27 4.28 16.25 4.5 16.25C6.29 16.25 7.75 17.71 7.75 19.5C7.75 19.72 7.73 19.93 7.69 20.14C7.38 21.66 6.04 22.75 4.5 22.75ZM4.5 17.75C4.38 17.75 4.25 17.76 4.14 17.79C3.34 17.95 2.75 18.67 2.75 19.5C2.75 20.46 3.54 21.25 4.5 21.25C5.33 21.25 6.05 20.66 6.21 19.85C6.23 19.74 6.25 19.62 6.25 19.5C6.25 18.54 5.46 17.75 4.5 17.75Z" fill={color} />
<path d="M19.5 22.75C17.96 22.75 16.62 21.66 16.31 20.15C16.27 19.94 16.25 19.72 16.25 19.5C16.25 17.71 17.71 16.25 19.5 16.25C19.72 16.25 19.93 16.27 20.14 16.31C21.66 16.62 22.75 17.96 22.75 19.5C22.75 21.29 21.29 22.75 19.5 22.75ZM19.5 17.75C18.54 17.75 17.75 18.54 17.75 19.5C17.75 19.62 17.76 19.75 17.79 19.86C17.95 20.66 18.67 21.25 19.5 21.25C20.46 21.25 21.25 20.46 21.25 19.5C21.25 18.67 20.66 17.95 19.85 17.79C19.75 17.76 19.62 17.75 19.5 17.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default FormatSquareOutlineIcon;
      