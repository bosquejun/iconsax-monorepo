
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const CallReceivedOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M17.45 22.75C16.32 22.75 15.13 22.48 13.9 21.96C12.7 21.45 11.49 20.75 10.31 19.9C9.13 19.04 8 18.07 6.94 17.02C5.88 15.95 4.92 14.82 4.07 13.66C3.21 12.46 2.52 11.27 2.03 10.1C1.51 8.87 1.25 7.67 1.25 6.54C1.25 5.76 1.39 5.02 1.66 4.33C1.95 3.61 2.39 2.96 3 2.39C3.77 1.64 4.65 1.25 5.59 1.25C5.98 1.25 6.38 1.34 6.72 1.5C7.11 1.68 7.44 1.95 7.68 2.31L10 5.58C10.21 5.87 10.37 6.15 10.48 6.43C10.61 6.73 10.68 7.03 10.68 7.32C10.68 7.7 10.57 8.07 10.36 8.42C10.21 8.69 9.98 8.98 9.69 9.27L9.01 9.98C9.02 10.01 9.03 10.03 9.04 10.05C9.16 10.26 9.4 10.62 9.86 11.16C10.34 11.72 10.81 12.22 11.27 12.7C11.87 13.29 12.35 13.74 12.81 14.12C13.38 14.6 13.75 14.84 13.97 14.95L13.95 15L14.68 14.28C14.99 13.97 15.29 13.74 15.58 13.59C16.13 13.25 16.83 13.19 17.53 13.48C17.79 13.59 18.07 13.74 18.37 13.95L21.69 16.31C22.05 16.56 22.33 16.88 22.49 17.26C22.64 17.64 22.71 17.99 22.71 18.34C22.71 18.82 22.6 19.3 22.39 19.75C22.18 20.2 21.92 20.59 21.59 20.95C21.02 21.58 20.4 22.03 19.68 22.32C18.99 22.6 18.24 22.75 17.45 22.75ZM5.59 2.75C5.04 2.75 4.53 2.99 4.04 3.47C3.59 3.9 3.26 4.37 3.06 4.88C2.85 5.4 2.75 5.95 2.75 6.54C2.75 7.47 2.97 8.48 3.41 9.52C3.86 10.58 4.49 11.68 5.29 12.78C6.09 13.88 7 14.95 8 15.96C9 16.95 10.08 17.87 11.19 18.68C12.27 19.47 13.38 20.11 14.48 20.57C16.19 21.3 17.79 21.47 19.11 20.92C19.62 20.71 20.07 20.39 20.48 19.93C20.71 19.68 20.89 19.41 21.04 19.09C21.16 18.84 21.22 18.58 21.22 18.32C21.22 18.16 21.19 18 21.11 17.82C21.09 17.77 21.02 17.65 20.83 17.52L17.51 15.16C17.31 15.02 17.13 14.92 16.96 14.85C16.7 14.75 16.53 14.74 16.31 14.88C16.11 14.98 15.93 15.13 15.73 15.33L14.97 16.08C14.58 16.46 13.98 16.55 13.52 16.38L13.25 16.26C12.84 16.04 12.36 15.7 11.83 15.25C11.34 14.84 10.84 14.37 10.2 13.74C9.7 13.23 9.22 12.7 8.71 12.12C8.24 11.57 7.9 11.1 7.69 10.71L7.56 10.41C7.5 10.19 7.48 10.06 7.48 9.92C7.48 9.56 7.61 9.24 7.86 8.99L8.61 8.21C8.81 8.01 8.96 7.82 9.06 7.65C9.14 7.52 9.17 7.41 9.17 7.31C9.17 7.23 9.14 7.11 9.09 6.99C9.03 6.82 8.92 6.65 8.78 6.45L6.46 3.17C6.36 3.03 6.24 2.93 6.09 2.86C5.93 2.79 5.76 2.75 5.59 2.75ZM13.95 15.01L13.79 15.69L14.06 14.99C14.02 14.98 13.98 14.99 13.95 15.01Z" fill={color} />
<path d="M17.0004 8.71992C16.8104 8.71992 16.6204 8.64992 16.4704 8.49992L14.4704 6.49992C14.1804 6.20992 14.1804 5.72992 14.4704 5.43992C14.7604 5.14992 15.2404 5.14992 15.5304 5.43992L17.0004 6.90992L20.4704 3.44992C20.7604 3.15992 21.2404 3.15992 21.5304 3.44992C21.8204 3.73992 21.8204 4.21992 21.5304 4.50992L17.5304 8.50992C17.3804 8.63992 17.1904 8.71992 17.0004 8.71992Z" fill={color} />
        </svg>
      )
    }
    
    
    export default CallReceivedOutlineIcon;
      