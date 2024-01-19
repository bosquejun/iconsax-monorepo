
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Driver2OutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M6 9C5.59 9 5.25 8.66 5.25 8.25V6.25C5.25 5.84 5.59 5.5 6 5.5C6.41 5.5 6.75 5.84 6.75 6.25V8.25C6.75 8.66 6.41 9 6 9Z" fill={color} />
<path d="M10 9C9.59 9 9.25 8.66 9.25 8.25V6.25C9.25 5.84 9.59 5.5 10 5.5C10.41 5.5 10.75 5.84 10.75 6.25V8.25C10.75 8.66 10.41 9 10 9Z" fill={color} />
<path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill={color} />
<path d="M6 18.75C5.59 18.75 5.25 18.41 5.25 18V16C5.25 15.59 5.59 15.25 6 15.25C6.41 15.25 6.75 15.59 6.75 16V18C6.75 18.41 6.41 18.75 6 18.75Z" fill={color} />
<path d="M10 18.75C9.59 18.75 9.25 18.41 9.25 18V16C9.25 15.59 9.59 15.25 10 15.25C10.41 15.25 10.75 15.59 10.75 16V18C10.75 18.41 10.41 18.75 10 18.75Z" fill={color} />
<path d="M18 8H14C13.59 8 13.25 7.66 13.25 7.25C13.25 6.84 13.59 6.5 14 6.5H18C18.41 6.5 18.75 6.84 18.75 7.25C18.75 7.66 18.41 8 18 8Z" fill={color} />
<path d="M18 17.75H14C13.59 17.75 13.25 17.41 13.25 17C13.25 16.59 13.59 16.25 14 16.25H18C18.41 16.25 18.75 16.59 18.75 17C18.75 17.41 18.41 17.75 18 17.75Z" fill={color} />
<path d="M22 12.75H2C1.59 12.75 1.25 12.41 1.25 12C1.25 11.59 1.59 11.25 2 11.25H22C22.41 11.25 22.75 11.59 22.75 12C22.75 12.41 22.41 12.75 22 12.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Driver2OutlineIcon;
      