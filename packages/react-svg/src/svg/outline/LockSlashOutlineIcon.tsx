
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const LockSlashOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M11.9996 19.25C10.9796 19.25 10.0396 18.79 9.41956 17.98C9.16956 17.65 9.22957 17.18 9.55957 16.93C9.88957 16.68 10.3596 16.74 10.6096 17.07C10.9396 17.51 11.4496 17.75 11.9996 17.75C12.9596 17.75 13.7496 16.96 13.7496 16C13.7496 15.61 13.6296 15.24 13.3896 14.94C13.1396 14.61 13.1996 14.14 13.5296 13.89C13.8596 13.64 14.3296 13.7 14.5796 14.03C15.0196 14.6 15.2496 15.28 15.2496 16C15.2496 17.79 13.7896 19.25 11.9996 19.25Z" fill={color} />
<path d="M17 22.75H7C6.63 22.75 6.28 22.74 5.95 22.72C5.54 22.7 5.22 22.34 5.24 21.93C5.26 21.52 5.61 21.22 6.03 21.22C6.33 21.24 6.65 21.24 6.99 21.24H16.99C20.56 21.24 21.24 20.56 21.24 16.99V14.99C21.24 11.48 20.5 10.91 17.95 10.76C17.65 10.74 17.33 10.74 16.99 10.74H7C3.43 10.74 2.75 11.42 2.75 14.99V16.99C2.75 18.73 2.95 19.76 3.41 20.32C3.67 20.64 3.62 21.12 3.29 21.37C2.97 21.63 2.5 21.58 2.24 21.25C1.54 20.4 1.25 19.16 1.25 17V15C1.25 10.59 2.59 9.25 7 9.25H17C17.37 9.25 17.72 9.26 18.04 9.28C22 9.5 22.75 11.46 22.75 15V17C22.75 21.41 21.41 22.75 17 22.75Z" fill={color} />
<path d="M6 10.75C5.59 10.75 5.25 10.41 5.25 10V8C5.25 5.1 5.95 1.25 12 1.25C16.07 1.25 18.18 2.58 18.64 5.44C18.71 5.85 18.43 6.23 18.02 6.3C17.61 6.37 17.23 6.09 17.16 5.68C16.91 4.16 16.12 2.75 12 2.75C7.64 2.75 6.75 4.85 6.75 8V10C6.75 10.41 6.41 10.75 6 10.75Z" fill={color} />
<path d="M1.99945 22.7499C1.80945 22.7499 1.61945 22.6799 1.46945 22.5299C1.17945 22.2399 1.17945 21.7599 1.46945 21.4699L21.4695 1.46994C21.7595 1.17994 22.2395 1.17994 22.5295 1.46994C22.8195 1.75994 22.8195 2.23994 22.5295 2.52994L2.52945 22.5299C2.37945 22.6799 2.18945 22.7499 1.99945 22.7499Z" fill={color} />
        </svg>
      )
    }
    
    
    export default LockSlashOutlineIcon;
      