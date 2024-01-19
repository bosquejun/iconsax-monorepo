
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const DriverRefreshOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M6 9C5.59 9 5.25 8.66 5.25 8.25V6.25C5.25 5.84 5.59 5.5 6 5.5C6.41 5.5 6.75 5.84 6.75 6.25V8.25C6.75 8.66 6.41 9 6 9Z" fill={color} />
<path d="M12 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V12C22.75 12.41 22.41 12.75 22 12.75C21.59 12.75 21.25 12.41 21.25 12V9C21.25 4.39 19.61 2.75 15 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H12C12.41 21.25 12.75 21.59 12.75 22C12.75 22.41 12.41 22.75 12 22.75Z" fill={color} />
<path d="M10 9C9.59 9 9.25 8.66 9.25 8.25V6.25C9.25 5.84 9.59 5.5 10 5.5C10.41 5.5 10.75 5.84 10.75 6.25V8.25C10.75 8.66 10.41 9 10 9Z" fill={color} />
<path d="M6 18.75C5.59 18.75 5.25 18.41 5.25 18V16C5.25 15.59 5.59 15.25 6 15.25C6.41 15.25 6.75 15.59 6.75 16V18C6.75 18.41 6.41 18.75 6 18.75Z" fill={color} />
<path d="M10 18.75C9.59 18.75 9.25 18.41 9.25 18V16C9.25 15.59 9.59 15.25 10 15.25C10.41 15.25 10.75 15.59 10.75 16V18C10.75 18.41 10.41 18.75 10 18.75Z" fill={color} />
<path d="M18 8H14C13.59 8 13.25 7.66 13.25 7.25C13.25 6.84 13.59 6.5 14 6.5H18C18.41 6.5 18.75 6.84 18.75 7.25C18.75 7.66 18.41 8 18 8Z" fill={color} />
<path d="M22 12.75H2C1.59 12.75 1.25 12.41 1.25 12C1.25 11.59 1.59 11.25 2 11.25H22C22.41 11.25 22.75 11.59 22.75 12C22.75 12.41 22.41 12.75 22 12.75Z" fill={color} />
<path d="M21.5594 20.33C20.9994 21.3 19.9494 21.95 18.7494 21.95C16.9594 21.95 15.8594 20.15 15.8594 20.15M15.9294 17.09C16.4894 16.11 17.5394 15.46 18.7494 15.46C20.9194 15.46 21.9994 17.26 21.9994 17.26M21.9994 15.25V17.25H19.9994M17.8594 20.14H15.8594V22" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default DriverRefreshOutlineIcon;
      