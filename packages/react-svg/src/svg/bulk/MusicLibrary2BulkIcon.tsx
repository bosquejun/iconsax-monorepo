
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MusicLibrary2BulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M19 7V8.13C18.68 8.04 18.35 8 18 8H6C5.65 8 5.32 8.04 5 8.13V7C5 5.9 5.9 5 7 5H17C18.1 5 19 5.9 19 7Z" fill={color} />
<path opacity="0.4" d="M16 3.51001V5H8V3.51001C8 2.68001 8.68001 2 9.51001 2H14.49C15.32 2 16 2.68001 16 3.51001Z" fill={color} />
<path opacity="0.4" d="M22 12V18C22 20.2 20.2 22 18 22H6C3.8 22 2 20.2 2 18V12C2 10.15 3.28 8.58 5 8.13C5.32 8.04 5.65 8 6 8H18C18.35 8 18.68 8.04 19 8.13C20.72 8.58 22 10.15 22 12Z" fill={color} />
<path d="M15.35 10.5098C15.05 10.2798 14.51 10.0598 13.66 10.2898L11.01 11.0198C10.18 11.2398 9.65002 11.9398 9.65002 12.7998V14.3498V16.1498C9.47002 16.0998 9.27001 16.0598 9.07001 16.0598C7.93001 16.0598 7 16.9898 7 18.1298C7 19.2698 7.93001 20.1998 9.07001 20.1998C10.21 20.1998 11.13 19.2798 11.14 18.1498C11.14 18.1398 11.15 18.1298 11.15 18.1198V14.9098L14.5 13.9998V15.2598C14.32 15.2098 14.13 15.1698 13.93 15.1698C12.79 15.1698 11.86 16.0998 11.86 17.2398C11.86 18.3798 12.79 19.3098 13.93 19.3098C15.07 19.3098 16 18.3798 16 17.2398V13.0198V12.0698C16 11.1998 15.64 10.7398 15.35 10.5098ZM9.07001 18.7098C8.75001 18.7098 8.5 18.4498 8.5 18.1398C8.5 17.8298 8.76001 17.5698 9.07001 17.5698C9.38001 17.5698 9.64001 17.8298 9.64001 18.1398C9.64001 18.4498 9.39001 18.7098 9.07001 18.7098ZM13.93 17.8198C13.61 17.8198 13.36 17.5598 13.36 17.2498C13.36 16.9398 13.62 16.6798 13.93 16.6798C14.24 16.6798 14.5 16.9398 14.5 17.2498C14.5 17.5598 14.24 17.8198 13.93 17.8198Z" fill={color} />
        </svg>
      )
    }
    
    
    export default MusicLibrary2BulkIcon;
      