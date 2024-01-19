
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Strongbox2OutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill={color} />
<path d="M16 19.75H8C5.58 19.75 4.25 18.42 4.25 16V8C4.25 5.58 5.58 4.25 8 4.25H16C18.42 4.25 19.75 5.58 19.75 8V16C19.75 18.42 18.42 19.75 16 19.75ZM8 5.75C6.42 5.75 5.75 6.42 5.75 8V16C5.75 17.58 6.42 18.25 8 18.25H16C17.58 18.25 18.25 17.58 18.25 16V8C18.25 6.42 17.58 5.75 16 5.75H8Z" fill={color} />
<path d="M7.48 15.25H5C4.59 15.25 4.25 14.91 4.25 14.5C4.25 14.09 4.59 13.75 5 13.75H7.48C8.45 13.75 9.23 12.96 9.23 12C9.23 11.04 8.44 10.25 7.48 10.25H5C4.59 10.25 4.25 9.91 4.25 9.5C4.25 9.09 4.59 8.75 5 8.75H7.48C9.27 8.75 10.73 10.21 10.73 12C10.73 13.79 9.28 15.25 7.48 15.25Z" fill={color} />
<path d="M19 10.7402H16C15.59 10.7402 15.25 10.4002 15.25 9.99023C15.25 9.58023 15.59 9.24023 16 9.24023H19C19.41 9.24023 19.75 9.58023 19.75 9.99023C19.75 10.4002 19.41 10.7402 19 10.7402Z" fill={color} />
<path d="M19 14.75H16C15.59 14.75 15.25 14.41 15.25 14C15.25 13.59 15.59 13.25 16 13.25H19C19.41 13.25 19.75 13.59 19.75 14C19.75 14.41 19.41 14.75 19 14.75Z" fill={color} />
<path d="M7.25 13.0001C7.12 13.0001 6.99 12.9701 6.87 12.9201C6.75 12.8701 6.63999 12.8001 6.53999 12.7101C6.34999 12.5201 6.25 12.2701 6.25 12.0001C6.25 11.7401 6.35999 11.4801 6.53999 11.2901C6.81999 11.0201 7.26 10.9201 7.63 11.0801C7.76 11.1301 7.87001 11.2001 7.96001 11.2901C8.14001 11.4801 8.25 11.7401 8.25 12.0001C8.25 12.2701 8.15001 12.5201 7.96001 12.7101C7.86001 12.8001 7.75 12.8701 7.63 12.9201C7.51 12.9701 7.38 13.0001 7.25 13.0001Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Strongbox2OutlineIcon;
      