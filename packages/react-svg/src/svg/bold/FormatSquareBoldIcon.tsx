
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const FormatSquareBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M20.75 16.5V7.5C21.94 7 22.75 5.83 22.75 4.5C22.75 2.71 21.29 1.25 19.5 1.25C18.18 1.25 17 2.06 16.5 3.25H7.5C7 2.06 5.83 1.25 4.5 1.25C2.71 1.25 1.25 2.71 1.25 4.5C1.25 5.82 2.06 7 3.25 7.5V16.5C2.06 17 1.25 18.17 1.25 19.5C1.25 21.29 2.71 22.75 4.5 22.75C5.82 22.75 7 21.94 7.5 20.75H16.5C17 21.94 18.17 22.75 19.5 22.75C21.29 22.75 22.75 21.29 22.75 19.5C22.75 18.18 21.94 17 20.75 16.5ZM19.16 16.27C19.05 16.28 18.95 16.3 18.84 16.32C18.57 16.37 18.31 16.46 18.06 16.59C18 16.62 17.94 16.65 17.88 16.69C17.38 16.97 16.97 17.38 16.69 17.88C16.65 17.94 16.62 18 16.59 18.06C16.46 18.31 16.37 18.57 16.32 18.84C16.3 18.95 16.28 19.05 16.27 19.16C16.26 19.19 16.26 19.22 16.26 19.25H7.74C7.72 19 7.67 18.76 7.6 18.53C7.58 18.45 7.55 18.36 7.51 18.28C7.48 18.21 7.45 18.14 7.41 18.06C7.38 18 7.35 17.94 7.31 17.88C7.03 17.38 6.62 16.97 6.12 16.69C6.06 16.65 6 16.62 5.94 16.59C5.86 16.55 5.79 16.52 5.72 16.49C5.64 16.45 5.55 16.42 5.47 16.4C5.24 16.33 5 16.28 4.75 16.26V7.74C5.01 7.72 5.25 7.67 5.49 7.59C5.58 7.57 5.68 7.53 5.77 7.49C5.82 7.47 5.88 7.44 5.94 7.41C6 7.38 6.06 7.35 6.12 7.31C6.62 7.03 7.03 6.62 7.31 6.12C7.35 6.06 7.38 6 7.41 5.94C7.44 5.88 7.47 5.82 7.49 5.77C7.53 5.68 7.57 5.58 7.59 5.49C7.67 5.25 7.72 5.01 7.74 4.75H16.26C16.28 5.02 16.33 5.27 16.42 5.52C16.44 5.6 16.47 5.69 16.51 5.77C16.53 5.83 16.56 5.88 16.59 5.94C16.62 6 16.65 6.06 16.69 6.12C16.97 6.62 17.38 7.03 17.88 7.31C17.94 7.35 18 7.38 18.06 7.41C18.12 7.44 18.17 7.47 18.23 7.49C18.31 7.53 18.4 7.56 18.48 7.58C18.73 7.67 18.98 7.72 19.25 7.74V16.26C19.22 16.26 19.19 16.26 19.16 16.27Z" fill={color} />
        </svg>
      )
    }
    
    
    export default FormatSquareBoldIcon;
      