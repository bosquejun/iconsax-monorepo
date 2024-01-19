
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ChartOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M7 14.69C6.59 14.69 6.25 14.35 6.25 13.94V10.73C6.25 10.32 6.59 9.97998 7 9.97998C7.41 9.97998 7.75 10.32 7.75 10.73V13.94C7.75 14.36 7.41 14.69 7 14.69Z" fill={color} />
<path d="M12 16.43C11.59 16.43 11.25 16.09 11.25 15.68V9C11.25 8.59 11.59 8.25 12 8.25C12.41 8.25 12.75 8.59 12.75 9V15.68C12.75 16.09 12.41 16.43 12 16.43Z" fill={color} />
<path d="M17 14.69C16.59 14.69 16.25 14.35 16.25 13.94V10.73C16.25 10.32 16.59 9.97998 17 9.97998C17.41 9.97998 17.75 10.32 17.75 10.73V13.94C17.75 14.36 17.41 14.69 17 14.69Z" fill={color} />
<path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ChartOutlineIcon;
      