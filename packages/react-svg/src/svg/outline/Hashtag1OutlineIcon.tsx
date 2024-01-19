
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Hashtag1OutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill={color} />
<path d="M14 17.75H10C7.93 17.75 6.25 16.07 6.25 14V10C6.25 7.93 7.93 6.25 10 6.25H14C16.07 6.25 17.75 7.93 17.75 10V14C17.75 16.07 16.07 17.75 14 17.75ZM10 7.75C8.76 7.75 7.75 8.76 7.75 10V14C7.75 15.24 8.76 16.25 10 16.25H14C15.24 16.25 16.25 15.24 16.25 14V10C16.25 8.76 15.24 7.75 14 7.75H10Z" fill={color} />
<path d="M12 17.75C11.59 17.75 11.25 17.41 11.25 17V7C11.25 6.59 11.59 6.25 12 6.25C12.41 6.25 12.75 6.59 12.75 7V17C12.75 17.41 12.41 17.75 12 17.75Z" fill={color} />
<path d="M17 12.75H7C6.59 12.75 6.25 12.41 6.25 12C6.25 11.59 6.59 11.25 7 11.25H17C17.41 11.25 17.75 11.59 17.75 12C17.75 12.41 17.41 12.75 17 12.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Hashtag1OutlineIcon;
      