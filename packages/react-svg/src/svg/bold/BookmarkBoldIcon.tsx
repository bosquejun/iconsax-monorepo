
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const BookmarkBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M22 7.80983V16.1898C22 19.3998 19.4 21.9998 16.19 21.9998H7.81C4.6 21.9998 2 19.3998 2 16.1898V7.80983C2 5.31983 3.02 3.50983 4.83 2.62983C5.49 2.30983 6.25 2.80983 6.25 3.53983V12.4198C6.25 13.6098 6.71 14.5598 7.54 15.0398C8.38 15.5098 9.44 15.4098 10.52 14.7598L11.82 13.9798C11.9 13.9398 12.1 13.9398 12.16 13.9698L13.48 14.7598C14.2 15.1898 14.82 15.3298 15.32 15.3298C15.84 15.3298 16.24 15.1698 16.48 15.0298C17.29 14.5598 17.75 13.6098 17.75 12.4198V3.53983C17.75 2.80983 18.52 2.30983 19.17 2.62983C20.98 3.50983 22 5.31983 22 7.80983Z" fill={color} />
<path d="M15.25 2C15.8 2 16.25 2.45 16.25 3V12.42C16.25 13.06 16.06 13.54 15.73 13.73C15.39 13.93 14.85 13.83 14.25 13.47L12.93 12.68C12.42 12.37 11.58 12.37 11.07 12.68L9.75 13.47C9.15 13.83 8.61 13.92 8.27 13.73C7.94 13.54 7.75 13.06 7.75 12.42V3C7.75 2.45 8.2 2 8.75 2H15.25Z" fill={color} />
        </svg>
      )
    }
    
    
    export default BookmarkBoldIcon;
      