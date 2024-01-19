
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const EmojiSadOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill={color} />
<path d="M10.6395 9.49994C10.4495 9.49994 10.2595 9.42994 10.1095 9.27994C9.39945 8.56994 8.23945 8.56994 7.52945 9.27994C7.23945 9.56994 6.75945 9.56994 6.46945 9.27994C6.17945 8.98994 6.17945 8.50994 6.46945 8.21994C7.75945 6.92994 9.86945 6.92994 11.1695 8.21994C11.4595 8.50994 11.4595 8.98994 11.1695 9.27994C11.0195 9.42994 10.8295 9.49994 10.6395 9.49994Z" fill={color} />
<path d="M13.3608 9.49994C13.1708 9.49994 12.9808 9.42994 12.8308 9.27994C12.5408 8.98994 12.5408 8.50994 12.8308 8.21994C14.1208 6.92994 16.2308 6.92994 17.5308 8.21994C17.8208 8.50994 17.8208 8.98994 17.5308 9.27994C17.2408 9.56994 16.7608 9.56994 16.4708 9.27994C15.7608 8.56994 14.6008 8.56994 13.8908 9.27994C13.7508 9.42994 13.5608 9.49994 13.3608 9.49994Z" fill={color} />
<path d="M15.6 18.45H8.4C7.49 18.45 6.75 17.71 6.75 16.8C6.75 13.91 9.1 11.55 12 11.55C14.9 11.55 17.25 13.91 17.25 16.8C17.25 17.71 16.51 18.45 15.6 18.45ZM12 13.05C9.93 13.05 8.25 14.73 8.25 16.8C8.25 16.88 8.32 16.95 8.4 16.95H15.6C15.68 16.95 15.75 16.88 15.75 16.8C15.75 14.73 14.07 13.05 12 13.05Z" fill={color} />
        </svg>
      )
    }
    
    
    export default EmojiSadOutlineIcon;
      