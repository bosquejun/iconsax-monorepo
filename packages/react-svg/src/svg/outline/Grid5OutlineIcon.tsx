
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Grid5OutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill={color} />
<path d="M10 22.75C9.59 22.75 9.25 22.41 9.25 22V2C9.25 1.59 9.59 1.25 10 1.25C10.41 1.25 10.75 1.59 10.75 2V22C10.75 22.41 10.41 22.75 10 22.75Z" fill={color} />
<path d="M22 12.75H10C9.59 12.75 9.25 12.41 9.25 12C9.25 11.59 9.59 11.25 10 11.25H22C22.41 11.25 22.75 11.59 22.75 12C22.75 12.41 22.41 12.75 22 12.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Grid5OutlineIcon;
      