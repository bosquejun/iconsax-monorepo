
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const VideoTickOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 15.24 22.75 15.49 22.73 15.72C22.7 16.02 22.49 16.28 22.2 16.37C21.91 16.46 21.59 16.36 21.4 16.12C20.69 15.25 19.64 14.75 18.5 14.75C17.65 14.75 16.82 15.04 16.16 15.57C15.26 16.28 14.75 17.34 14.75 18.5C14.75 19.17 14.94 19.84 15.29 20.43C15.51 20.8 15.8 21.13 16.13 21.39C16.37 21.58 16.47 21.9 16.38 22.19C16.29 22.48 16.04 22.69 15.73 22.72C15.5 22.75 15.25 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H14.03C14.02 21.24 14.01 21.22 14 21.21C13.5 20.39 13.24 19.45 13.24 18.5C13.24 16.88 13.96 15.39 15.22 14.4C16.9 13.04 19.45 12.92 21.24 14.02V9C21.24 4.39 19.6 2.75 14.99 2.75H9Z" fill={color} />
<path d="M21.4795 7.85986H2.51953C2.10953 7.85986 1.76953 7.51986 1.76953 7.10986C1.76953 6.69986 2.10953 6.35986 2.51953 6.35986H21.4795C21.8895 6.35986 22.2295 6.69986 22.2295 7.10986C22.2295 7.51986 21.8995 7.85986 21.4795 7.85986Z" fill={color} />
<path d="M8.51953 7.71985C8.10953 7.71985 7.76953 7.37985 7.76953 6.96985V2.10986C7.76953 1.69986 8.10953 1.35986 8.51953 1.35986C8.92953 1.35986 9.26953 1.69986 9.26953 2.10986V6.96985C9.26953 7.37985 8.92953 7.71985 8.51953 7.71985Z" fill={color} />
<path d="M15.4805 7.2699C15.0705 7.2699 14.7305 6.9299 14.7305 6.5199V2.10986C14.7305 1.69986 15.0705 1.35986 15.4805 1.35986C15.8905 1.35986 16.2305 1.69986 16.2305 2.10986V6.5199C16.2305 6.9399 15.9005 7.2699 15.4805 7.2699Z" fill={color} />
<path d="M18.5 23.75C17.32 23.75 16.18 23.35 15.26 22.62C15.24 22.6 15.21 22.59 15.19 22.57C14.72 22.19 14.32 21.74 14.01 21.21C13.51 20.39 13.25 19.45 13.25 18.5C13.25 16.88 13.97 15.39 15.23 14.4C16.15 13.66 17.31 13.25 18.5 13.25C20.09 13.25 21.57 13.95 22.56 15.18C23.32 16.1 23.75 17.28 23.75 18.5C23.75 19.45 23.49 20.38 22.99 21.21C22.7 21.69 22.35 22.1 21.95 22.45C21 23.29 19.78 23.75 18.5 23.75ZM16.07 21.35C16.1 21.37 16.12 21.39 16.15 21.41C16.81 21.96 17.64 22.26 18.5 22.26C19.42 22.26 20.27 21.94 20.96 21.33C21.25 21.08 21.5 20.78 21.71 20.45C22.06 19.86 22.25 19.19 22.25 18.52C22.25 17.65 21.95 16.81 21.4 16.15C20.69 15.27 19.63 14.77 18.5 14.77C17.65 14.77 16.82 15.06 16.16 15.59C15.26 16.3 14.75 17.36 14.75 18.52C14.75 19.19 14.94 19.86 15.29 20.45C15.5 20.78 15.76 21.09 16.07 21.35Z" fill={color} />
<path d="M17.8497 20.3597C17.6597 20.3597 17.4697 20.2897 17.3197 20.1397L16.2097 19.0297C15.9197 18.7397 15.9197 18.2596 16.2097 17.9696C16.4997 17.6796 16.9797 17.6796 17.2697 17.9696L17.8697 18.5697L19.7397 16.8397C20.0397 16.5597 20.5197 16.5797 20.7997 16.8797C21.0797 17.1797 21.0597 17.6597 20.7597 17.9397L18.3597 20.1596C18.2197 20.2896 18.0397 20.3597 17.8497 20.3597Z" fill={color} />
        </svg>
      )
    }
    
    
    export default VideoTickOutlineIcon;
      